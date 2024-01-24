import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import '../ModalContainer/ModalContainer.css'

export default function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const heading = "Use Google's location service?";
    const content = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.";


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >

                <DialogTitle id="responsive-dialog-title" className='displayed_matter'>
                    {heading}
                </DialogTitle>
                <div id='alert-dialog-description'>
                    <DialogContent  >
                        <DialogContentText className='dailog_text'>
                           {content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} variant="contained" style={{ backgroundColor: 'red', color: 'white' }}>
                            Disagree
                        </Button>
                        <Button onClick={handleClose} autoFocus variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>
                            Agree
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
