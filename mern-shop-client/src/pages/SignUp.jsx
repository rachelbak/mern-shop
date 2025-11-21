// import { useForm } from "react-hook-form";
// import { httpAddUser } from "../api/userService";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { userIn } from "../features/userSlice";
// const SignUp = () => {

//     let dispatch = useDispatch();
//     let navigate = useNavigate();
//     const save = (data) => {
//         httpAddUser(data).then(res => {
//             alert("משתמש נרשם בהצלחה");
//             navigate("/list");
//             dispatch(userIn(res.data));

//         }).catch(err => {
//             console.log(err);
//             alert("שגיאה בהרשמה");
//         })
//     }
//     let { register, handleSubmit, formState: { errors } } = useForm()
//     return (
//         <div>
//             <h1>הרשמה</h1>
//             <form noValidate onSubmit={handleSubmit(save)}>

//                 <input type="text" {...register("userName", {
//                     required: { value: true, message: "username is required" }
//                 })} />
//                 {errors.username && <div className="err-msg">{errors.username.message}</div>}
//                 <input type="password" {...register("password", {
//                     required: { value: true, message: "password is required" },
//                     pattern: { value: /[a-zA-Z0-9]{5,}/, message: "password needs a least 5 digits/letters" }
//                 })} />
//                 {errors.password && <div className="err-msg">{errors.password.message}</div>}
//                 <input type="text" {...register("phone", {
//                     required: { value: true, message: "phone is required" },

//                 })} />
//                 {errors.phone && <div className="err-msg">{errors.phone.message}</div>}

//                 <input type="email" {...register("email", {
//                     required: { value: true, message: "email is required" }
//                     // pattern: { value:/^[a-zA-Z0-9]{2,5}@gmail.com$/, message: "email needs a to be in cirrect email format" }

//                 })} />
//                 {errors.email && <div className="err-msg">{errors.email.message}</div>}
//                 <input type="submit" />
//             </form>

//         </div>);
// }

// export default SignUp;
// import { useForm } from "react-hook-form";
// import { httpAddUser } from "../api/userService";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { userIn } from "../features/userSlice";
// import { useState } from "react";
// import {
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   IconButton,
//   InputAdornment,
//   CircularProgress
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm();
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const save = (data) => {
//     setLoading(true);
//     httpAddUser(data)
//       .then((res) => {
//         alert("משתמש נרשם בהצלחה");
//         navigate("/list");
//         dispatch(userIn(res.data));
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("שגיאה בהרשמה");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//       <Card
//         sx={{
//           maxWidth: 400,
//           padding: 3,
//           borderRadius: "50px",
//           boxShadow: "none",
//           textAlign: "center",
//           direction: "rtl",
//           background: "none",

//         }}
//       >
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" gutterBottom color="error">
//             הירשם
//           </Typography>

//           <Typography mt={2}>
//             יש לך חשבון?{" "}
//             <Link to="/login" style={{ color: "darkred", fontWeight: "bold", textDecoration: "none" }}>
//               התחבר עכשיו
//             </Link>
//           </Typography>

//           <form noValidate onSubmit={handleSubmit(save)}>
//             {["userName", "password", "confirmPassword", "phone", "email"].map((field, index) => (
//               <TextField
//                 key={index}
//                 label={
//                   field === "userName"
//                     ? "שם משתמש"
//                     : field === "password"
//                     ? "סיסמה"
//                     : field === "confirmPassword"
//                     ? "אימות סיסמה"
//                     : field === "phone"
//                     ? "טלפון"
//                     : "אימייל"
//                 }
//                 type={
//                   (field === "password" && !passwordVisible) || (field === "confirmPassword" && !confirmPasswordVisible)
//                     ? "password"
//                     : "text"
//                 }
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 {...register(field, {
//                   required: `יש להזין ${
//                     field === "userName"
//                       ? "שם משתמש"
//                       : field === "password"
//                       ? "סיסמה"
//                       : field === "confirmPassword"
//                       ? "אימות סיסמה"
//                       : field === "phone"
//                       ? "מספר טלפון"
//                       : "כתובת אימייל"
//                   }`,
//                   pattern:
//                     field === "email"
//                       ? {
//                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                           message: "אימייל לא תקני"
//                         }
//                       : field === "phone"
//                       ? {
//                           value: /^0\d{1,2}-?\d{7}$/,
//                           message: "מספר טלפון לא תקני"
//                         }
//                       : undefined,
//                   minLength:
//                     field === "password"
//                       ? {
//                           value: 8,
//                           message: "הסיסמה חייבת להכיל לפחות 8 תווים"
//                         }
//                       : undefined,
//                   validate:
//                     field === "confirmPassword"
//                       ? (value) => value === watch("password") || "הסיסמאות לא תואמות"
//                       : undefined
//                 })}
//                 error={!!errors[field]}
//                 helperText={errors[field]?.message}
//                 InputProps={
//                   field === "password" || field === "confirmPassword"
//                     ? {
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <IconButton
//                               onClick={() =>
//                                 field === "password"
//                                   ? setPasswordVisible(!passwordVisible)
//                                   : setConfirmPasswordVisible(!confirmPasswordVisible)
//                               }
//                             >
//                               {field === "password"
//                                 ? passwordVisible
//                                   ? <VisibilityOff />
//                                   : <Visibility />
//                                 : confirmPasswordVisible
//                                 ? <VisibilityOff />
//                                 : <Visibility />}
//                             </IconButton>
//                           </InputAdornment>
//                         )
//                       }
//                     : {}
//                 }
//                 sx={{
//                   borderRadius: "50px",
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "50px",
//                     "&:hover fieldset": { borderColor: "black" },
//                     "&.Mui-focused fieldset": { borderColor: "black" }
//                   },
//                   "& label": { color: "black" },
//                   "& label.Mui-focused": { color: "black" }
//                 }}
//               />
//             ))}

//             <Button
//               type="submit"
//               variant="contained"
//               color="error"
//               fullWidth
//               sx={{ mt: 2, borderRadius: "50px" }}
//               disabled={loading}
//             >
//               {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default SignUp;
import { useForm } from "react-hook-form";
import { httpAddUser } from "../api/userService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userIn } from "../features/userSlice";
import { useState } from "react";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
    IconButton,
    InputAdornment,
    CircularProgress,
    Snackbar,
    Alert
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success"
    });
    const [shouldNavigate, setShouldNavigate] = useState(false);

    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false });
        if (shouldNavigate) {
            navigate("/list");
        }
    };

    const save = (data) => {
        setLoading(true);
        httpAddUser(data)
            .then((res) => {
                setSnackbar({
                    open: true,
                    message: "משתמש נרשם בהצלחה",
                    severity: "success"
                });
                setShouldNavigate(true);
                dispatch(userIn(res.data));
            })
            .catch((err) => {
                console.log(err);
                setSnackbar({
                    open: true,
                    message: "שגיאה בהרשמה",
                    severity: "error"
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card
                sx={{
                    maxWidth: 400,
                    padding: 3,
                    borderRadius: "50px",
                    boxShadow: "none",
                    textAlign: "center",
                    direction: "rtl",
                    background: "none"
                }}
            >
                <CardContent>
                    <Typography variant="h5" fontWeight="bold" gutterBottom color="error">
                        הירשם
                    </Typography>

                    <Typography mt={2}>
                        יש לך חשבון?{" "}
                        <Link to="/login" style={{ color: "darkred", fontWeight: "bold", textDecoration: "none" }}>
                            התחבר עכשיו
                        </Link>
                    </Typography>

                    <form noValidate onSubmit={handleSubmit(save)}>
                        {["userName", "password", "confirmPassword", "phone", "email"].map((field, index) => (
                            <TextField
                                key={index}
                                label={
                                    field === "userName"
                                        ? "שם משתמש"
                                        : field === "password"
                                            ? "סיסמה"
                                            : field === "confirmPassword"
                                                ? "אימות סיסמה"
                                                : field === "phone"
                                                    ? "טלפון"
                                                    : "אימייל"
                                }
                                type={
                                    (field === "password" && !passwordVisible) || (field === "confirmPassword" && !confirmPasswordVisible)
                                        ? "password"
                                        : "text"
                                }
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                {...register(field, {
                                    required: `יש להזין ${field === "userName"
                                            ? "שם משתמש"
                                            : field === "password"
                                                ? "סיסמה"
                                                : field === "confirmPassword"
                                                    ? "אימות סיסמה"
                                                    : field === "phone"
                                                        ? "מספר טלפון"
                                                        : "כתובת אימייל"
                                        }`,
                                    pattern:
                                        field === "email"
                                            ? {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "אימייל לא תקני"
                                            }
                                            : field === "phone"
                                                ? {
                                                    value: /^0\d{1,2}-?\d{7}$/,
                                                    message: "מספר טלפון לא תקני"
                                                }
                                                : undefined,
                                    minLength:
                                        field === "password"
                                            ? {
                                                value: 8,
                                                message: "הסיסמה חייבת להכיל לפחות 8 תווים"
                                            }
                                            : undefined,
                                    validate:
                                        field === "confirmPassword"
                                            ? (value) => value === watch("password") || "הסיסמאות לא תואמות"
                                            : undefined
                                })}
                                error={!!errors[field]}
                                helperText={errors[field]?.message}
                                InputProps={
                                    field === "password" || field === "confirmPassword"
                                        ? {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IconButton
                                                        onClick={() =>
                                                            field === "password"
                                                                ? setPasswordVisible(!passwordVisible)
                                                                : setConfirmPasswordVisible(!confirmPasswordVisible)
                                                        }
                                                    >
                                                        {field === "password"
                                                            ? passwordVisible
                                                                ? <VisibilityOff />
                                                                : <Visibility />
                                                            : confirmPasswordVisible
                                                                ? <VisibilityOff />
                                                                : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }
                                        : {}
                                }
                                sx={{
                                    borderRadius: "50px",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "50px",
                                        "&:hover fieldset": { borderColor: "black" },
                                        "&.Mui-focused fieldset": { borderColor: "black" }
                                    },
                                    "& label": { color: "black" },
                                    "& label.Mui-focused": { color: "black" }
                                }}
                            />
                        ))}

                        <Button
                            type="submit"
                            variant="contained"
                            color="error"
                            fullWidth
                            sx={{ mt: 2, borderRadius: "50px" }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }} // ⬅️ שינוי מיקום
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                    elevation={6}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SignUp;
