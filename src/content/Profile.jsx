import React, { useState, useEffect } from "react";
import { Button, Typography, Paper, Container, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUser(JSON.parse(storedUserData));
        } else {
            import("./userData").then(data => setUser(data.default));
        }
    }, []);

    const formatWeight = (weightKg) => {
        const weightLbs = weightKg * 2.20462;
        return `${weightLbs.toFixed(1)} lbs`; // Rounds to 1 decimal place
    };

    const formatHeight = (heightCm) => {
        const totalInches = heightCm / 2.54;
        const feet = Math.floor(totalInches / 12);
        const inches = Math.round(totalInches % 12);
        return `${feet}' ${inches}"`; // e.g., 5' 10"
    };

    const UserInfoRow = ({ label, value, editableKey }) => {
        const [openDialog, setOpenDialog] = useState(false);
        const [editValue, setEditValue] = useState(value);

        const handleOpenDialog = () => {
            setOpenDialog(true);
        };

        const handleCloseDialog = () => {
            setOpenDialog(false);
        };

        const handleSave = () => {
            const updatedUser = { ...user, [editableKey]: editValue };
            setUser(updatedUser);
            localStorage.setItem('userData', JSON.stringify(updatedUser));
            handleCloseDialog();
        };

        let displayValue = value;
        if (editableKey === 'weight') {
            displayValue = formatWeight(value);
        } else if (editableKey === 'height') {
            displayValue = formatHeight(value);
        }

        return (
            <>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="body1" align="left"><strong>{label}:</strong></Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align="right">{displayValue}<IconButton size="small" onClick={handleOpenDialog}>
                            <EditIcon />
                        </IconButton></Typography>
                    
                        
                    </Grid>
                </Grid>
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Edit {label}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Update your {label.toLowerCase()}.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id={label}
                            label={label}
                            type="text"
                            fullWidth
                            variant="standard"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Paper style={{ padding: '20px' }} elevation={3}>
                <Typography variant="h4" gutterBottom>
                    Profile
                </Typography>
                {Object.entries(user).map(([key, value]) => (
                    <UserInfoRow key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} value={value} editableKey={key} />
                ))}
            </Paper>
        </Container>
    );
}
