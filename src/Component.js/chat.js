import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {  Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const WhatsAppQuoteForm = ({ services }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleClose = () => {
  setName("");
  setService("");
  setOpen(false);
};


  const phoneNumber = "27607511793"; // Format: 27xxxxxxxxx (NO + SIGN)

  const handleSend = () => {
    const message = `Hello, my name is ${name}. I would like a quote for: ${service}`;
    const encodedMsg = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");

    setOpen(false);
  };

  

  return (
    <>
      {/* Floating WhatsApp Button */}
      <Fab
        color="success"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          backgroundColor: "#25D366",
          "&:hover": { backgroundColor: "#1ebe5d" },
          zIndex: 9999,
        }}
      >
        <WhatsAppIcon sx={{ color: "white", fontSize: 42 }} />
      </Fab>

      {/* Popup Form */}
      {/* Popup Form */}
  <Dialog 
    open={open} 
    onClose={() => handleClose()}
    PaperProps={{
      sx: {
        borderRadius: 3,
        width: { xs: "90vw", sm: 350 },
        maxWidth: 350,
        bgcolor: "#f0f0f0",
        p: 0,
        margin: { xs: "1rem", sm: "auto" }
      }
    }}
    disableScrollLock  // prevents page shift
  >
    {/* Header */}
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "#25D366", color: "#fff", p: { xs: 1, sm: 1.5 }, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
        WhatsApp Quote
      </Typography>
     
    </Box>

    {/* Content */}
    <DialogContent sx={{ pt: 2, pb: 1, px: { xs: 1.5, sm: 2 } }}>
      <TextField
        label="Your Name"
        fullWidth
        margin="dense"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
      />

      <TextField
        select
        label="Select a Service"
        fullWidth
        margin="dense"
        value={service}
        onChange={(e) => setService(e.target.value)}
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
      >
        {services.map((item, idx) => (
          <MenuItem key={idx} value={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </TextField>
    </DialogContent>

    {/* Actions */}
    <Box sx={{ display: "flex", justifyContent: "space-between", p: { xs: 1, sm: 1 }, gap: 1 }}>
      <Button onClick={() => handleClose()} sx={{ color: "#25D366", flex: 1, fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
        Cancel
      </Button>
      <Button 
        variant="contained" 
        onClick={handleSend}
        disabled={!name || !service}
        sx={{ bgcolor: "#25D366", "&:hover": { bgcolor: "#1ebe57" }, borderRadius: 2, flex: 1, fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
      >
        Send
      </Button>
    </Box>
  </Dialog>
    </>
  );
};

export default WhatsAppQuoteForm;
