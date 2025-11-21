// import { useForm } from "react-hook-form";
// import { httpAddParrot, httpUpdateParrot } from '../api/parrotService.js'
// import { Navigate, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const AddOrUpdateProduct = () => {
//     let location = useLocation();
//     let product = location.state?.product || {};
//     let navigate = useNavigate();
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             nameproduct: product.nameproduct || "",
//             description: product.description || "",
//             bearthDate: product.bearthDate || "",
//             image: product.image || "",
//             price: product.price || "",
//             speeking: product.speeking || "noSpeeking",
//             expirationDate: product.expirationDate || ""
//         }
//     });

//     const save = (data) => {
//         if (!product._id) {
//             httpAddParrot(data)
//                 .then(() => {
//                     alert("מוצר נוסף בהצלחה");
//                     navigate("/list");
//                 })
//                 .catch(err => {
//                     console.log(err.message);
//                     alert("שגיאה בהכנסת מוצר");
//                 });
//         } else {
//             httpUpdateParrot(data, product._id)
//                 .then(() => {
//                     alert("מוצר עודכן בהצלחה");
//                     navigate("/list");
//                 })
//                 .catch(err => {
//                     console.log(err.message);
//                     alert("שגיאה בעידכון מוצר");
//                 });

//         }
//     }

//     return (
//         <form noValidate onSubmit={handleSubmit(save)}>
//             {/* שם המוצר */}
//             <input type="text" {...register("nameproduct", {
//                 required: { value: true, message: "שם המוצר נדרש" }
//             })} />
//             {errors.nameproduct && <div className="err-msg">{errors.nameproduct.message}</div>}

//             {/* תיאור */}
//             <input type="text" {...register("description")} placeholder="תיאור" />

//             {/* תאריך לידה */}
//             <input type="date" {...register("bearthDate")} />

//             {/* תמונה */}
//             <input type="text" {...register("image")} placeholder="קישור לתמונה" />

//             {/* מחיר */}
//             <input type="number" {...register("price", {
//                 required: { value: true, message: "המחיר נדרש" },
//                 min: { value: 0, message: "המחיר חייב להיות מספר חיובי" }
//             })} />
//             {errors.price && <div className="err-msg">{errors.price.message}</div>}

//             {/* דיבור */}
//             <select {...register("speeking")}>
//                 <option value="noSpeeking">לא מדבר</option>
//                 <option value="speeking">מדבר</option>
//             </select>

//             {/* תאריך תפוגה */}
//             <input type="date" {...register("expirationDate")} />
//             {product._id &&
//                 <input type="button" value="ביטול" onClick={() => {
//                     navigate("/list");
//                 }} />}
//             <input type="submit" value="סיום"
//             />
//         </form>
//     );
// }

// export default AddOrUpdateProduct;



// import { useForm } from "react-hook-form";
// import { httpAddParrot, httpUpdateParrot } from '../api/parrotService.js';
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import {
//     TextField,
//     Button,
//     MenuItem,
//     Box,
//     Typography,
//     Stack,
//     IconButton
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from "react";

// const AddOrUpdateProduct = () => {
//     const location = useLocation();
//     const product = location.state?.product || {};
//     const navigate = useNavigate();
//     let isSpeek = location.state?.product.speeking || "noSpeeking";

//     // const { register, handleSubmit, formState: { errors } } = useForm({
//     //     defaultValues: {
//     //         nameproduct: product.nameproduct || "",
//     //         description: product.description || "",
//     //         bearthDate: product.bearthDate || "",
//     //         image: product.image || "",
//     //         price: product.price || "",
//     //         speeking: product.speeking || "noSpeeking",
//     //     }
//     // });
//     const { register, handleSubmit, reset, formState: { errors } } = useForm({
//         defaultValues: {
//             nameproduct: product.nameproduct || "",
//             description: product.description || "",
//             bearthDate: product.bearthDate || "",
//             image: product.image || "",
//             price: product.price || "",
//             speeking: product.speeking || "noSpeeking",
//         }
//     });

//     useEffect(() => {
//         if (!location.state?.product) {
//             reset({
//                 nameproduct: "",
//                 description: "",
//                 bearthDate: "",
//                 image: "",
//                 price: "",
//                 speeking: "noSpeeking",
//             });
//         }
//     }, [location.state, reset]);


//     const save = (data) => {
//         const action = product._id ? httpUpdateParrot(data, product._id) : httpAddParrot(data);
//         const successMsg = product._id ? "מוצר עודכן בהצלחה" : "מוצר נוסף בהצלחה";
//         const errorMsg = product._id ? "שגיאה בעדכון מוצר" : "שגיאה בהכנסת מוצר";

//         action
//             .then(() => {
//                 alert(successMsg);
//                 navigate("/list");
//             })
//             .catch(err => {
//                 console.error(err.message);
//                 alert(errorMsg);
//             });
//     };

//     return (
//         <Box
//             component="form"
//             onSubmit={handleSubmit(save)}
//             noValidate
//             sx={{
//                 maxWidth: 500,
//                 margin: 'auto',
//                 padding: 4,
//                 backgroundColor: '#f9f9f9',
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 position: 'relative'
//             }}
//         >
//             {/* כפתור X לסגירה */}
//             <IconButton
//                 onClick={() => navigate("/list")}
//                 sx={{ position: 'absolute', top: 8, right: 8 }}
//                 aria-label="סגור"
//             >
//                 <CloseIcon />
//             </IconButton>

//             <Typography variant="h5" mb={3} textAlign="center">
//                 {product._id ? "עדכון מוצר" : "הוספת מוצר"}
//             </Typography>

//             <Stack spacing={2}>
//                 <TextField
//                     label="שם מוצר"
//                     {...register("nameproduct", { required: "שם המוצר נדרש" })}
//                     error={Boolean(errors.nameproduct)}
//                     helperText={errors.nameproduct?.message}
//                     fullWidth
//                 />

//                 <TextField
//                     label="תיאור"
//                     {...register("description")}
//                     fullWidth
//                 />

//                 <TextField
//                     label="תאריך לידה"
//                     type="date"
//                     {...register("bearthDate", {
//                         required: "תאריך נדרש",
//                         validate: (value) => {
//                             const selectedDate = new Date(value);
//                             const today = new Date();
//                             today.setHours(0, 0, 0, 0); // לוודא שאין השפעה של שעה
//                             return selectedDate <= today || "תאריך הלידה לא יכול להיות בעתיד";
//                         }
//                     })}
//                     InputLabelProps={{ shrink: true }}
//                     error={Boolean(errors.bearthDate)}
//                     helperText={errors.bearthDate?.message}
//                     fullWidth
//                 />

//                 <TextField
//                     label="קישור לתמונה"
//                     {...register("image")}
//                     fullWidth
//                 />

//                 <TextField
//                     label="מחיר"
//                     type="number"
//                     inputProps={{ step: "0.01" }}
//                     {...register("price", {
//                         required: "המחיר נדרש",
//                         validate: (value) =>
//                             parseFloat(value) > 0 || "המחיר חייב להיות גדול מ-0"
//                     })}
//                     error={Boolean(errors.price)}
//                     helperText={errors.price?.message}
//                     fullWidth
//                 />


//                 <TextField
//                     select
//                     label={isSpeek}
//                     {...register("speeking")}
//                     fullWidth
//                 >
//                     <MenuItem value="noSpeeking">noSpeeking </MenuItem>
//                     <MenuItem value="speeking">speeking</MenuItem>
//                 </TextField>
//                 <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
//                     <Button
//                         variant="contained"
//                         type="submit"
//                         sx={{ backgroundColor: "#555", '&:hover': { backgroundColor: "#333" } }}
//                     >
//                         סיום
//                     </Button>

//                     <Button
//                         variant="contained"
//                         onClick={() => navigate("/list")}
//                         sx={{ backgroundColor: "#777", '&:hover': { backgroundColor: "#555" } }}
//                     >
//                         ביטול
//                     </Button>
//                 </Stack>

//             </Stack>
//         </Box>
//     );
// };

// export default AddOrUpdateProduct;

// import { useForm } from "react-hook-form";
// import { httpAddParrot, httpUpdateParrot } from '../api/parrotService.js';
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import {
//     TextField,
//     Button,
//     MenuItem,
//     Box,
//     Typography,
//     Stack,
//     IconButton
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const AddOrUpdateProduct = () => {
//     const location = useLocation();
//     const product = location.state?.product || {};
//     const navigate = useNavigate();
//     let isSpeek = location.state?.product?.speeking || "noSpeeking";

//     const { register, handleSubmit, reset, formState: { errors } } = useForm({
//         defaultValues: {
//             nameproduct: product.nameproduct || "",
//             description: product.description || "",
//             bearthDate: product.bearthDate || "",
//             image: product.image || "",
//             price: product.price || "",
//             speeking: product.speeking || "noSpeeking",
//         }
//     });

//     useEffect(() => {
//         if (!location.state?.product) {
//             reset({
//                 nameproduct: "",
//                 description: "",
//                 bearthDate: "",
//                 image: "",
//                 price: "",
//                 speeking: "noSpeeking",
//             });
//         }
//     }, [location.state, reset]);

//     const save = (data) => {
//         const action = product._id ? httpUpdateParrot(data, product._id) : httpAddParrot(data);
//         const successMsg = product._id ? "מוצר עודכן בהצלחה" : "מוצר נוסף בהצלחה";
//         const errorMsg = product._id ? "שגיאה בעדכון מוצר" : "שגיאה בהכנסת מוצר";

//         action
//             .then(() => {
//                 alert(successMsg);
//                 navigate("/list");
//             })
//             .catch(err => {
//                 console.error(err.message);
//                 alert(errorMsg);
//             });
//     };

//     const inputStyle = {
//         '& label.Mui-focused': {
//             color: 'black',
//         },
//         '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//                 borderColor: 'black',
//             },
//             '&:hover fieldset': {
//                 borderColor: 'black',
//             },
//             '&.Mui-focused fieldset': {
//                 borderColor: 'black',
//             },
//         },
//     };

//     return (
//         <Box
//             component="form"
//             onSubmit={handleSubmit(save)}
//             noValidate
//             sx={{
//                 maxWidth: 500,
//                 margin: 'auto',
//                 padding: 4,
//                 backgroundColor: '#f9f9f9',
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 position: 'relative'
//             }}
//         >
//             {/* כפתור X לסגירה */}
//             <IconButton
//                 onClick={() => navigate("/list")}
//                 sx={{ position: 'absolute', top: 8, right: 8 }}
//                 aria-label="סגור"
//             >
//                 <CloseIcon />
//             </IconButton>

//             <Typography variant="h5" mb={3} textAlign="center">
//                 {product._id ? "עדכון מוצר" : "הוספת מוצר"}
//             </Typography>

//             <Stack spacing={2}>
//                 <TextField
//                     label="שם מוצר"
//                     {...register("nameproduct", { required: "שם המוצר נדרש" })}
//                     error={Boolean(errors.nameproduct)}
//                     helperText={errors.nameproduct?.message}
//                     fullWidth
//                     sx={inputStyle}
//                 />

//                 <TextField
//                     label="תיאור"
//                     {...register("description")}
//                     fullWidth
//                     sx={inputStyle}
//                 />

//                 <TextField
//                     label="תאריך לידה"
//                     type="date"
//                     {...register("bearthDate", {
//                         required: "תאריך נדרש",
//                         validate: (value) => {
//                             const selectedDate = new Date(value);
//                             const today = new Date();
//                             today.setHours(0, 0, 0, 0);
//                             return selectedDate <= today || "תאריך הלידה לא יכול להיות בעתיד";
//                         }
//                     })}
//                     InputLabelProps={{ shrink: true }}
//                     error={Boolean(errors.bearthDate)}
//                     helperText={errors.bearthDate?.message}
//                     fullWidth
//                     sx={inputStyle}
//                 />

//                 <TextField
//                     label="קישור לתמונה"
//                     {...register("image")}
//                     fullWidth
//                     sx={inputStyle}
//                 />

//                 <TextField
//                     label="מחיר"
//                     type="number"
//                     inputProps={{ step: "0.01" }}
//                     {...register("price", {
//                         required: "המחיר נדרש",
//                         validate: (value) =>
//                             parseFloat(value) > 0 || "המחיר חייב להיות גדול מ-0"
//                     })}
//                     error={Boolean(errors.price)}
//                     helperText={errors.price?.message}
//                     fullWidth
//                     sx={inputStyle}
//                 />

//                 <TextField
//                     select
//                     label={isSpeek}
//                     {...register("speeking")}
//                     fullWidth
//                     sx={inputStyle}
//                 >
//                     <MenuItem value="noSpeeking">noSpeeking</MenuItem>
//                     <MenuItem value="speeking">speeking</MenuItem>
//                 </TextField>




//                 <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
//                     <Button
//                         variant="outlined"
//                         type="submit"
//                         sx={{
//                             color: "#fff",
//                             borderColor: "#d32f2f",
//                             backgroundColor: "#d32f2f",
//                             borderRadius:"15px",
//                             '&:hover': {
//                                 backgroundColor: "#b71c1c",
//                                 borderColor: "#b71c1c",
//                             }
//                         }}
//                     >
//                         סיום
//                     </Button>

//                     <Button
//                         variant="outlined"
//                         onClick={() => navigate("/list")}
//                         sx={{
//                             color: "#000",
//                             borderColor: "#000",
//                             backgroundColor: "#fff",
//                             borderRadius:"15px",
//                             '&:hover': {
//                                 backgroundColor: "#f5f5f5"
//                             }
//                         }}
//                     >
//                         ביטול
//                     </Button>
//                 </Stack>
//             </Stack>
//         </Box>
//     );
// };

// export default AddOrUpdateProduct;

import { useForm } from "react-hook-form";
import { httpAddParrot, httpUpdateParrot } from '../api/parrotService.js';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    TextField,
    Button,
    MenuItem,
    Box,
    Typography,
    Stack,
    IconButton,
    Snackbar,
    Alert
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddOrUpdateProduct = () => {
    const location = useLocation();
    const product = location.state?.product || {};
    const navigate = useNavigate();
    let isSpeek = location.state?.product?.speeking || "noSpeeking";

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            nameproduct: product.nameproduct || "",
            description: product.description || "",
            bearthDate: product.bearthDate
                ? new Date(product.bearthDate).toISOString().split('T')[0]
                : "",
            image: product.image || "",
            price: product.price || "",
            speeking: product.speeking || "noSpeeking",
        }
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    useEffect(() => {
        if (!location.state?.product) {
            reset({
                nameproduct: "",
                description: "",
                bearthDate: "",
                image: "",
                price: "",
                speeking: "noSpeeking",
            });
        }
    }, [location.state, reset]);

    const save = (data) => {
        const action = product._id ? httpUpdateParrot(data, product._id) : httpAddParrot(data);
        const successMsg = product._id ? "מוצר עודכן בהצלחה" : "מוצר נוסף בהצלחה";
        const errorMsg = product._id ? "שגיאה בעדכון מוצר" : "שגיאה בהכנסת מוצר";

        action
            .then(() => {
                showSnackbar(successMsg, 'success');
                setTimeout(() => navigate("/list"), 2000); // מעבר אחרי שהודעה מוצגת
            })
            .catch(err => {
                console.error(err.message);
                showSnackbar(errorMsg, 'error');
            });
    };

    const inputStyle = {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit(save)}
                noValidate
                sx={{
                    maxWidth: 500,
                    margin: 'auto',
                    padding: 4,
                    backgroundColor: '#f9f9f9',
                    borderRadius: 2,
                    boxShadow: 3,
                    position: 'relative'
                }}
            >
                <IconButton
                    onClick={() => navigate("/list")}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    aria-label="סגור"
                >
                    <CloseIcon />
                </IconButton>

                <Typography variant="h5" mb={3} textAlign="center">
                    {product._id ? "עדכון מוצר" : "הוספת מוצר"}
                </Typography>

                <Stack spacing={2}>
                    <TextField
                        label="שם מוצר"
                        {...register("nameproduct", { required: "שם המוצר נדרש" })}
                        error={Boolean(errors.nameproduct)}
                        helperText={errors.nameproduct?.message}
                        fullWidth
                        sx={inputStyle}
                    />
                    <TextField
                        label="תיאור"
                        {...register("description")}
                        fullWidth
                        sx={inputStyle}
                    />
                    <TextField
                        label="תאריך לידה"
                        type="date"
                        {...register("bearthDate", {
                            required: "תאריך נדרש",
                            validate: (value) => {
                                const selectedDate = new Date(value);
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                return selectedDate <= today || "תאריך הלידה לא יכול להיות בעתיד";
                            }
                        })}
                        InputLabelProps={{ shrink: true }}
                        error={Boolean(errors.bearthDate)}
                        helperText={errors.bearthDate?.message}
                        fullWidth
                        sx={inputStyle}
                    />
                    <TextField
                        label="קישור לתמונה"
                        {...register("image")}
                        fullWidth
                        sx={inputStyle}
                    />
                    <TextField
                        label="מחיר"
                        type="number"
                        inputProps={{ step: "0.01" }}
                        {...register("price", {
                            required: "המחיר נדרש",
                            validate: (value) =>
                                parseFloat(value) > 0 || "המחיר חייב להיות גדול מ-0"
                        })}
                        error={Boolean(errors.price)}
                        helperText={errors.price?.message}
                        fullWidth
                        sx={inputStyle}
                    />
                    <TextField
                        select
                        label={isSpeek}
                        {...register("speeking")}
                        fullWidth
                        sx={inputStyle}
                    >
                        <MenuItem value="noSpeeking">noSpeeking</MenuItem>
                        <MenuItem value="speeking">speeking</MenuItem>
                    </TextField>

                    <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                        <Button
                            variant="outlined"
                            type="submit"
                            sx={{
                                color: "#fff",
                                borderColor: "#d32f2f",
                                backgroundColor: "#d32f2f",
                                borderRadius: "15px",
                                '&:hover': {
                                    backgroundColor: "#b71c1c",
                                    borderColor: "#b71c1c",
                                }
                            }}
                        >
                            סיום
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={() => navigate("/list")}
                            sx={{
                                color: "#000",
                                borderColor: "#000",
                                backgroundColor: "#fff",
                                borderRadius: "15px",
                                '&:hover': {
                                    backgroundColor: "#f5f5f5"
                                }
                            }}
                        >
                            ביטול
                        </Button>
                    </Stack>
                </Stack>
            </Box>

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
        </>
    );
};

export default AddOrUpdateProduct;
