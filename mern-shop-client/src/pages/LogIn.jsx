// import { useState } from "react";
// import { httpLoginUser } from "../api/userService.js"
// import { useDispatch, useSelector } from "react-redux";
// import { userIn } from "../features/userSlice.js";
// import { useNavigate } from "react-router-dom";


// const LogIn = () => {
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const dispatch = useDispatch();
//     let navigate = useNavigate();
//     const loginUser = () => {
//         httpLoginUser({ userName: name, password: password })
//             .then(res => {
//                 alert(name + " שלום");
//                 alert(res.data.role);
//                 navigate("/list");
//                 dispatch(userIn(res.data));
//             })
//             .catch(err => {
//                 console.log(err.message);
//                 alert("שם או סיסמה שגוים");
//             })
//     }

//     return (<div>
//         <div>
//             <input type="password" placeholder="סיסמה" value={password} onChange={(e) => { setPassword(e.target.value) }} />
//         </div>
//         <div>
//             <input type="text" placeholder="שם" value={name} onChange={(e) => { setName(e.target.value) }} />
//         </div>
//         <div>
//             <input type="button" value="כניסה" onClick={loginUser} />
//         </div>
//     </div>)

// }
// export default LogIn;


// import { useState } from "react";
// import { httpLoginUser } from "../api/userService.js";
// import { useDispatch } from "react-redux";
// import { userIn } from "../features/userSlice.js";
// import { useNavigate } from "react-router-dom";
// import { CardContent, TextField, Button, Typography, IconButton, InputAdornment, CircularProgress } from "@mui/material";
// import { Box } from "@mui/system";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const LogIn = () => {
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [showPassword, setShowPassword] = useState(false); // State for showing password
//     const [loading, setLoading] = useState(false); // State for loading indicator
//     const dispatch = useDispatch();
//     let navigate = useNavigate();

//     const loginUser = () => {
//         setLoading(true);
//         httpLoginUser({ userName: name, password: password })
//             .then(res => {
//                 alert(name + " שלום");
//                 alert(res.data.role);
//                 navigate("/list");
//                 dispatch(userIn(res.data));
//             })
//             .catch(err => {
//                 console.log(err.message);
//                 alert("שם או סיסמה שגויים");
//             })
//             .finally(() => {
//                 setLoading(false); // Stop loading when request is done
//             });
//     };

//     return (
//         <>

//             <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//                 <Box display="flex" flexDirection="column" alignItems="center">

//                     {/* תמונה עגולה מעל הכרטיס */}
//                     <Box
//                         component="img"
//                         src="images/adas.jpg"
//                         alt=""
//                         sx={{
//                             width: 140,
//                             height: 140,
//                             borderRadius: "50%",
//                             objectFit: "cover",
//                             marginBottom: 0,
//                             boxShadow: 3,
//                         }}
//                     />

//                     {/* כרטיס התחברות */}
//                     <Box
//                         sx={{
//                             maxWidth: 400,
//                             padding: 3,
//                             borderRadius: "15px",
//                             textAlign: "center",
//                             direction: "rtl",
//                             // backgroundColor: "#fff",
//                             background: "none" 
//                         }}
//                     >
//                         <CardContent>
//                             <Typography variant="h5" fontWeight="bold" gutterBottom color="error">
//                                 login
//                             </Typography>
//                             <TextField
//                                 label="שם משתמש"
//                                 variant="outlined"
//                                 fullWidth
//                                 margin="normal"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 InputLabelProps={{ shrink: true }}
//                                 sx={{
//                                     '& label.Mui-focused': { color: 'black' },
//                                     '& .MuiOutlinedInput-root': {
//                                         '& fieldset': { borderColor: 'black' },
//                                         '&:hover fieldset': { borderColor: 'darkred' },
//                                         '&.Mui-focused fieldset': { borderColor: 'black' },
//                                         borderRadius: "25px"
//                                     }
//                                 }}
//                             />
//                             <TextField
//                                 label="סיסמה"
//                                 type={showPassword ? "text" : "password"}
//                                 variant="outlined"
//                                 fullWidth
//                                 margin="normal"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 InputLabelProps={{ shrink: true }}
//                                 sx={{
//                                     '& label.Mui-focused': { color: 'black' },
//                                     '& .MuiOutlinedInput-root': {
//                                         '& fieldset': { borderColor: 'black' },
//                                         '&:hover fieldset': { borderColor: 'darkred' },
//                                         '&.Mui-focused fieldset': { borderColor: 'black' },
//                                         borderRadius: "25px"
//                                     }
//                                 }}
//                                 InputProps={{
//                                     endAdornment: (
//                                         <InputAdornment position="end">
//                                             <IconButton onClick={() => setShowPassword(!showPassword)}>
//                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     ),
//                                     dir: "ltr"
//                                 }}
//                             />
//                             <Button
//                                 variant="contained"
//                                 color="error"
//                                 fullWidth
//                                 sx={{ mt: 2, borderRadius: "25px" }}
//                                 onClick={loginUser}
//                                 disabled={loading}
//                             >
//                                 {loading ? <CircularProgress size={24} color="inherit" /> : "login"}
//                             </Button>
//                         </CardContent>
//                     </Box>
//                 </Box>
//             </Box>
//         </>
//     );
// };

// export default LogIn;

// import { useForm } from "react-hook-form";
// import { httpLoginUser } from "../api/userService.js";
// import { useDispatch } from "react-redux";
// import { userIn } from "../features/userSlice.js";
// import { useNavigate } from "react-router-dom";
// import {
//     CardContent,
//     TextField,
//     Button,
//     Typography,
//     IconButton,
//     InputAdornment,
//     CircularProgress
// } from "@mui/material";
// import { Box } from "@mui/system";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const LogIn = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm();

//     const onSubmit = (data) => {
//         setErrorMessage(""); // ננקה שגיאה קודמת
//         setLoading(true);

//         httpLoginUser({ userName: data.name, password: data.password })
//             .then(res => {
//                 alert(data.name + " שלום");
//                 alert(res.data.role);
//                 navigate("/list");
//                 dispatch(userIn(res.data));
//             })
//             .catch(err => {
//                 console.log(err.message);
//                 setErrorMessage("שם משתמש או סיסמה שגויים"); // שגיאה על המסך
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     };

//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//             <Box display="flex" flexDirection="column" alignItems="center">

//                 {/* תמונה עגולה */}
//                 <Box
//                     component="img"
//                     src="images/adas.jpg"
//                     alt=""
//                     sx={{
//                         width: 140,
//                         height: 140,
//                         borderRadius: "50%",
//                         objectFit: "cover",
//                         marginBottom: 0,
//                         boxShadow: 3,
//                     }}
//                 />

//                 {/* טופס התחברות */}
//                 <Box
//                     sx={{
//                         maxWidth: 400,
//                         padding: 3,
//                         borderRadius: "15px",
//                         textAlign: "center",
//                         direction: "rtl",
//                         background: "none"
//                     }}
//                 >
//                     <CardContent>
//                         <Typography variant="h5" fontWeight="bold" gutterBottom color="error">
//                             התחברות
//                         </Typography>

//                         <Typography mt={2}>
//                             אין לך חשבון?{" "}
//                             <Link to="/signup" style={{ color: "darkred", fontWeight: "bold", textDecoration: "none" }}>
//                                 הירשם עכשיו
//                             </Link>
//                         </Typography>

//                         <form onSubmit={handleSubmit(onSubmit)}>

//                             <TextField
//                                 label="שם משתמש"
//                                 variant="outlined"
//                                 fullWidth
//                                 margin="normal"
//                                 {...register("name", { required: "שדה זה חובה" })}
//                                 error={!!errors.name}
//                                 helperText={errors.name?.message}
//                                 InputLabelProps={{ shrink: true }}
//                                 sx={{
//                                     '& label.Mui-focused': { color: 'black' },
//                                     '& .MuiOutlinedInput-root': {
//                                         '& fieldset': { borderColor: 'black' },
//                                         '&:hover fieldset': { borderColor: 'darkred' },
//                                         '&.Mui-focused fieldset': { borderColor: 'black' },
//                                         borderRadius: "25px"
//                                     }
//                                 }}
//                             />

//                             <TextField
//                                 label="סיסמה"
//                                 type={showPassword ? "text" : "password"}
//                                 variant="outlined"
//                                 fullWidth
//                                 margin="normal"
//                                 {...register("password", { required: "שדה זה חובה" })}
//                                 error={!!errors.password}
//                                 helperText={errors.password?.message}
//                                 InputLabelProps={{ shrink: true }}
//                                 sx={{
//                                     '& label.Mui-focused': { color: 'black' },
//                                     '& .MuiOutlinedInput-root': {
//                                         '& fieldset': { borderColor: 'black' },
//                                         '&:hover fieldset': { borderColor: 'darkred' },
//                                         '&.Mui-focused fieldset': { borderColor: 'black' },
//                                         borderRadius: "25px"
//                                     }
//                                 }}
//                                 InputProps={{
//                                     endAdornment: (
//                                         <InputAdornment position="end">
//                                             <IconButton onClick={() => setShowPassword(!showPassword)}>
//                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     ),
//                                     dir: "ltr"
//                                 }}
//                             />

//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 color="error"
//                                 fullWidth
//                                 sx={{ mt: 2, borderRadius: "25px" }}
//                                 disabled={loading}
//                             >
//                                 {loading ? <CircularProgress size={24} color="inherit" /> : "login"}
//                             </Button>

//                             {/* הודעת שגיאה כללית */}
//                             {errorMessage && (
//                                 <Typography color="error" mt={2} fontWeight="bold">
//                                     {errorMessage}
//                                 </Typography>
//                             )}
//                         </form>

                     
//                     </CardContent>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default LogIn;
import { useForm } from "react-hook-form";
import { httpLoginUser } from "../api/userService.js";
import { useDispatch } from "react-redux";
import { userIn } from "../features/userSlice.js";
import { useNavigate } from "react-router-dom";
import {
    CardContent,
    TextField,
    Button,
    Typography,
    IconButton,
    InputAdornment,
    CircularProgress,
    Snackbar,
    Alert
} from "@mui/material";
import { Box } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    const onSubmit = (data) => {
        setErrorMessage("");
        setLoading(true);

        httpLoginUser({ userName: data.name, password: data.password })
            .then(res => {
                showSnackbar(` שלום ${data.name}, התחברת בהצלחה:) `, 'success');
                dispatch(userIn(res.data));
                setTimeout(() => navigate("/list"), 2000);
            })
            .catch(err => {
                console.log(err.message);
                setErrorMessage("שם משתמש או סיסמה שגויים");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Box display="flex" flexDirection="column" alignItems="center">

                <Box
                    component="img"
                    src="images/adas.jpg"
                    alt=""
                    sx={{
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: 0,
                        boxShadow: 3,
                    }}
                />

                <Box
                    sx={{
                        maxWidth: 400,
                        padding: 3,
                        borderRadius: "15px",
                        textAlign: "center",
                        direction: "rtl",
                        background: "none"
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" gutterBottom color="error">
                            התחברות
                        </Typography>

                        <Typography mt={2}>
                            אין לך חשבון?{" "}
                            <Link to="/signup" style={{ color: "darkred", fontWeight: "bold", textDecoration: "none" }}>
                                הירשם עכשיו
                            </Link>
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <TextField
                                label="שם משתמש"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                {...register("name", { required: "שדה זה חובה" })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    '& label.Mui-focused': { color: 'black' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: 'black' },
                                        '&:hover fieldset': { borderColor: 'darkred' },
                                        '&.Mui-focused fieldset': { borderColor: 'black' },
                                        borderRadius: "25px"
                                    }
                                }}
                            />

                            <TextField
                                label="סיסמה"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                {...register("password", { required: "שדה זה חובה" })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    '& label.Mui-focused': { color: 'black' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: 'black' },
                                        '&:hover fieldset': { borderColor: 'darkred' },
                                        '&.Mui-focused fieldset': { borderColor: 'black' },
                                        borderRadius: "25px"
                                    }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    dir: "ltr"
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="error"
                                fullWidth
                                sx={{ mt: 2, borderRadius: "25px" }}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : "login"}
                            </Button>

                            {errorMessage && (
                                <Typography color="error" mt={2} fontWeight="bold">
                                    {errorMessage}
                                </Typography>
                            )}
                        </form>
                    </CardContent>
                </Box>
            </Box>

            {/* Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default LogIn;
