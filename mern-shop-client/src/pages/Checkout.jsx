// import { useState } from "react";
// import { httpAddOrder } from "../api/orderService";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearCart } from "../features/cartSlice.js"
// const Checkout = () => {
//     let navigate = useNavigate();
//     let user = useSelector(state => state.user.currentUser);
//     const dispatch = useDispatch()
//     // if (!user)
//     //     navigate("/signup")
//     let arr = useSelector(state => state.cart.arr);
//     let [targetAddress, setTargetAddress] = useState("");


//     let newArr = arr.map(item => ({
//         productCode: item._id,
//         nameproduct: item.nameproduct,
//         price: item.price,
//     }));
//     const save = () => {

//         // e.preventDefault();
//         httpAddOrder({
//             codeUser: user._id,
//             orderProducts: newArr,
//             targetAddress: targetAddress,
//         }).then(res => {
//             alert("הזמנה נשמרה בהצלחה");
//             dispatch(clearCart());
//             console.log(res)
//         }).catch(err => {
//             console.log(err);
//             alert(`שגיאה בשמירת ההזמנה\n${err.message}`);
//         })

//     }

//     return (<>
//         <label >כתובת</label>
//         <input type="text" onChange={(e) => { setTargetAddress(e.target.value); }} />
//         <input type="button" value="אישור הזמנה" onClick={save} />
//     </>)

// }

// export default Checkout;

// import { useState } from "react";
// import { httpAddOrder } from "../api/orderService";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearCart } from "../features/cartSlice";
// import { TextField, Button, Box, Typography, Card, CardContent, FormControlLabel, Checkbox } from "@mui/material";

// const Checkout = () => {
//     let navigate = useNavigate();
//     let user = useSelector(state => state.user.currentUser);
//     const dispatch = useDispatch();
//     let arr = useSelector(state => state.cart.arr);
//     let [targetAddress, setTargetAddress] = useState("");
//     let [creditCardNumber, setCreditCardNumber] = useState("");
//     let [expiryDate, setExpiryDate] = useState("");
//     let [cvv, setCvv] = useState("");
//     let [paypal, setPaypal] = useState(false);

//     let newArr = arr.map(item => ({
//         productCode: item._id,
//         nameproduct: item.nameproduct,
//         price: item.price,
//     }));

//     const save = () => {
//         httpAddOrder({
//             codeUser: user._id,
//             orderProducts: newArr,
//             targetAddress: targetAddress,

//         }).then(res => {
//             alert("הזמנה נשמרה בהצלחה");
//             dispatch(clearCart());
//             console.log(res);
//             navigate("/list");
//         }).catch(err => {
//             console.log(err);
//             alert(`שגיאה בשמירת ההזמנה\n${err.message}`);
//         })
//     }

//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: "#f7f7f7", padding: 2 }}>
//             <Card sx={{ maxWidth: 500, padding: 3, borderRadius: 3, boxShadow: 3, direction: "rtl" }}>
//                 <CardContent>
//                     <Typography variant="h5" gutterBottom fontWeight="bold" color="error">
//                         אישור הזמנה ותשלום
//                     </Typography>

//                     <TextField
//                         label="כתובת"
//                         type="text"
//                         fullWidth
//                         variant="outlined"
//                         margin="normal"
//                         value={targetAddress}
//                         onChange={(e) => setTargetAddress(e.target.value)}
//                         required
//                         sx={{
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: "20px",
//                                 '&:hover fieldset': { borderColor: "black" },
//                                 '&.Mui-focused fieldset': { borderColor: "black" }
//                             },
//                             '& label': { color: "black" },
//                             '& label.Mui-focused': { color: "black" }
//                         }}
//                     />

//                     <Typography variant="h6" gutterBottom fontWeight="bold" color="primary">
//                         פרטי תשלום
//                     </Typography>

//                     <TextField
//                         label="מספר כרטיס אשראי"
//                         type="text"
//                         fullWidth
//                         variant="outlined"
//                         margin="normal"
//                         value={creditCardNumber}
//                         onChange={(e) => setCreditCardNumber(e.target.value)}
//                         required
//                         sx={{
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: "20px",
//                                 '&:hover fieldset': { borderColor: "black" },
//                                 '&.Mui-focused fieldset': { borderColor: "black" }
//                             },
//                             '& label': { color: "black" },
//                             '& label.Mui-focused': { color: "black" }
//                         }}
//                     />

//                     <TextField
//                         label="תאריך תפוגה (MM/YY)"
//                         type="text"
//                         fullWidth
//                         variant="outlined"
//                         margin="normal"
//                         value={expiryDate}
//                         onChange={(e) => setExpiryDate(e.target.value)}
//                         required
//                         sx={{
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: "20px",
//                                 '&:hover fieldset': { borderColor: "black" },
//                                 '&.Mui-focused fieldset': { borderColor: "black" }
//                             },
//                             '& label': { color: "black" },
//                             '& label.Mui-focused': { color: "black" }
//                         }}
//                     />

//                     <TextField
//                         label="CVV"
//                         type="text"
//                         fullWidth
//                         variant="outlined"
//                         margin="normal"
//                         value={cvv}
//                         onChange={(e) => setCvv(e.target.value)}
//                         required
//                         sx={{
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: "20px",
//                                 '&:hover fieldset': { borderColor: "black" },
//                                 '&.Mui-focused fieldset': { borderColor: "black" }
//                             },
//                             '& label': { color: "black" },
//                             '& label.Mui-focused': { color: "black" }
//                         }}
//                     />

//                     {/* <FormControlLabel
//                         control={<Checkbox checked={paypal} onChange={() => setPaypal(!paypal)} />}
//                         label="שילם באמצעות PayPal (לא פעיל)"
//                     /> */}

//                     <Button
//                         onClick={save}
//                         variant="contained"
//                         color="error"
//                         fullWidth
//                         sx={{ mt: 3, borderRadius: "50px" }}
//                     >
//                         אישור הזמנה
//                     </Button>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// }

// export default Checkout;
// import { useForm } from "react-hook-form";
// import { httpAddOrder } from "../api/orderService";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearCart } from "../features/cartSlice";
// import { TextField, Button, Box, Typography, Card, CardContent } from "@mui/material";

// const Checkout = () => {
//     const navigate = useNavigate();
//     const user = useSelector(state => state.user.currentUser);
//     const dispatch = useDispatch();
//     const arr = useSelector(state => state.cart.arr);

//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const newArr = arr.map(item => ({
//         productCode: item._id,
//         nameproduct: item.nameproduct,
//         price: item.price,
//     }));

//     const onSubmit = (data) => {
//         httpAddOrder({
//             codeUser: user._id,
//             orderProducts: newArr,
//             targetAddress: data.targetAddress,
//         }).then(res => {
//             alert("הזמנה נשמרה בהצלחה");
//             dispatch(clearCart());
//             navigate("/list");
//         }).catch(err => {
//             console.error(err);
//             alert(`שגיאה בשמירת ההזמנה\n${err.message}`);
//         });
//     };

//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: "#f7f7f7", padding: 2 }}>
//             <Card sx={{ maxWidth: 500, padding: 3, borderRadius: 3, boxShadow: 3, direction: "rtl" }}>
//                 <CardContent>
//                     <Typography variant="h5" gutterBottom fontWeight="bold" color="black">
//                         אישור הזמנה ותשלום
//                     </Typography>

//                     <form onSubmit={handleSubmit(onSubmit)}>

//                         <TextField
//                             label="כתובת"
//                             type="text"
//                             fullWidth
//                             variant="outlined"
//                             margin="normal"
//                             {...register("targetAddress", {
//                                 required: "שדה זה חובה",
//                                 pattern: {
//                                     value: /^[\u0590-\u05FF\s]+[\d]+$/,
//                                     message: "יש להזין כתובת ואחריה מספר"
//                                 }
//                             })}
//                             error={!!errors.targetAddress}
//                             helperText={errors.targetAddress?.message}
//                             sx={{
//                                 '& .MuiOutlinedInput-root': {
//                                     borderRadius: "20px",
//                                     '&:hover fieldset': { borderColor: "black" },
//                                     '&.Mui-focused fieldset': { borderColor: "black" }
//                                 },
//                                 '& label': { color: "black" },
//                                 '& label.Mui-focused': { color: "black" }
//                             }}
//                         />


//                         <Typography variant="h6" gutterBottom fontWeight="bold" color="black">
//                             פרטי תשלום
//                         </Typography>

//                         <TextField
//                             label="מספר כרטיס אשראי"
//                             type="text"
//                             fullWidth
//                             variant="outlined"
//                             margin="normal"
//                             {...register("creditCardNumber")}
//                             sx={{
//                                 '& .MuiOutlinedInput-root': {
//                                     borderRadius: "20px",
//                                     '&:hover fieldset': { borderColor: "black" },
//                                     '&.Mui-focused fieldset': { borderColor: "black" }
//                                 },
//                                 '& label': { color: "black" },
//                                 '& label.Mui-focused': { color: "black" }
//                             }}
//                         />

//                         <TextField
//                             label="תאריך תפוגה (MM/YY)"
//                             type="text"
//                             fullWidth
//                             variant="outlined"
//                             margin="normal"
//                             {...register("expiryDate")}
//                             sx={{
//                                 '& .MuiOutlinedInput-root': {
//                                     borderRadius: "20px",
//                                     '&:hover fieldset': { borderColor: "black" },
//                                     '&.Mui-focused fieldset': { borderColor: "black" }
//                                 },
//                                 '& label': { color: "black" },
//                                 '& label.Mui-focused': { color: "black" }
//                             }}
//                         />

//                         <TextField
//                             label="CVV"
//                             type="text"
//                             fullWidth
//                             variant="outlined"
//                             margin="normal"
//                             {...register("cvv")}
//                             sx={{
//                                 '& .MuiOutlinedInput-root': {
//                                     borderRadius: "20px",
//                                     '&:hover fieldset': { borderColor: "black" },
//                                     '&.Mui-focused fieldset': { borderColor: "black" }
//                                 },
//                                 '& label': { color: "black" },
//                                 '& label.Mui-focused': { color: "black" }
//                             }}
//                         />

//                         {/* תשלום בפייפאל עדיין לא פעיל */}
//                         {/* <FormControlLabel
//                             control={<Checkbox {...register("paypal")} />}
//                             label="שילם באמצעות PayPal (לא פעיל)"
//                         /> */}

//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="error"
//                             fullWidth
//                             sx={{ mt: 3, borderRadius: "50px" }}
//                         >
//                             אישור הזמנה
//                         </Button>
//                     </form>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default Checkout;
import { useForm } from "react-hook-form";
import { httpAddOrder } from "../api/orderService";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cartSlice";
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Snackbar,
  Alert
} from "@mui/material";
import { useState } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const arr = useSelector(state => state.cart.arr);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const newArr = arr.map(item => ({
    productCode: item._id,
    nameproduct: item.nameproduct,
    price: item.price,
  }));

  const onSubmit = (data) => {
    httpAddOrder({
      codeUser: user._id,
      orderProducts: newArr,
      targetAddress: data.targetAddress,
    }).then(res => {
      setSnackbar({
        open: true,
        message: "הזמנה נשמרה בהצלחה",
        severity: "success"
      });
      dispatch(clearCart());
      setTimeout(() => navigate("/list"), 1500); // נותן זמן להודעה לפני ניתוב
    }).catch(err => {
      console.error(err);
      setSnackbar({
        open: true,
        message: `שגיאה בשמירת ההזמנה: ${err.message}`,
        severity: "error"
      });
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: "#f7f7f7", padding: 2 }}>
      <Card sx={{ maxWidth: 500, padding: 3, borderRadius: 3, boxShadow: 3, direction: "rtl" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="black">
            אישור הזמנה ותשלום
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>

            <TextField
              label="כתובת"
              type="text"
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("targetAddress", {
                required: "שדה זה חובה",
                pattern: {
                  value: /^[\u0590-\u05FF\s]+[\d]+$/,
                  message: "יש להזין כתובת ואחריה מספר"
                }
              })}
              error={!!errors.targetAddress}
              helperText={errors.targetAddress?.message}
              sx={textFieldStyle}
            />

            <Typography variant="h6" gutterBottom fontWeight="bold" color="black">
              פרטי תשלום
            </Typography>

            <TextField
              label="מספר כרטיס אשראי"
              type="text"
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("creditCardNumber")}
              sx={textFieldStyle}
            />

            <TextField
              label="תאריך תפוגה (MM/YY)"
              type="text"
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("expiryDate")}
              sx={textFieldStyle}
            />

            <TextField
              label="CVV"
              type="text"
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("cvv")}
              sx={textFieldStyle}
            />

            <Button
              type="submit"
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 3, borderRadius: "50px" }}
            >
              אישור הזמנה
            </Button>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: "20px",
    '&:hover fieldset': { borderColor: "black" },
    '&.Mui-focused fieldset': { borderColor: "black" }
  },
  '& label': { color: "black" },
  '& label.Mui-focused': { color: "black" }
};

export default Checkout;
