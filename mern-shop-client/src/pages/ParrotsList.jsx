// import { useEffect, useState } from "react";
// import { httpGetAllParrots, httpDeleteParrot } from "../api/parrotService";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";

// const ParrotList = () => {
//     let user = useSelector(state => state.user.currentUser);
//     let [arr, setArr] = useState([]);
//     let [pagesCnt, setPagesCnt] = useState(4)
//     let [currentPage, setCurrentPage] = useState(1)
//     let dispatch = useDispatch();
//     let navigate = useNavigate();

//     useEffect(() => {
//         bringFromServer(currentPage)
//     }, [currentPage])


//     const bringFromServer = (page) => {
//         httpGetAllParrots(page)
//             .then(res => {
//                 setArr(res.data);
//                 // console.log(res.data);
//                 console.log("from then");

//             })
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת המוצרים");
//             })
//     }

//     let buttons = [];
//     for (let i = 1; i <= pagesCnt; i++) {
//         buttons.push(<input key={i} className={i == currentPage ? "active" : ""} type="button" value={i} onClick={() => {
//             setCurrentPage(i);
//         }} />)
//     }
//     return (
//         <>
//             <h1>רשימת התוכים</h1>
//             <div>
//                 {buttons}
//                 <ul>

//                     {arr.map(item => <li key={item._id}>{item.nameproduct}
//                         {user?.role != "ADMIN" &&
//                             <input type="button" value="הוסף לסל" onClick={() => {
//                                 dispatch(addToCart(item))
//                             }} />}
//                         {user?.role == "ADMIN" &&
//                             <input type="button" value="מחק מוצר" onClick={() => {
//                                 httpDeleteParrot(item._id)
//                                     .then(res => {
//                                         alert("מוצר נמחק בהצלחה");
//                                         let copy = arr.filter(product => product._id != item._id);
//                                         setArr(copy);
//                                     })
//                                     .catch(err => {
//                                         console.log(err.message);
//                                     })

//                             }} />}
//                         {user?.role == "ADMIN" &&
//                             <input type="button" value="עידכון" onClick={() => {
//                                 navigate("/AddOrUpdateProduct", { state: { product: item } });
//                             }} />}
//                         {/* {item.image} */}
//                         {item.price}
//                         {<img src={item.image} />}
//                     </li>)}
//                 </ul>
//             </div>
//         </>
//     );
// }


// export default ParrotList;


// import { useEffect, useState } from "react";
// import { httpGetAllParrots, httpDeleteParrot } from "../api/parrotService";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions, Pagination, Box } from "@mui/material";

// const ParrotList = () => {
//     let user = useSelector(state => state.user.currentUser);
//     let [arr, setArr] = useState([]);
//     let [pagesCnt, setPagesCnt] = useState(4);
//     let [currentPage, setCurrentPage] = useState(1);
//     let dispatch = useDispatch();
//     let navigate = useNavigate();

//     useEffect(() => {
//         bringFromServer(currentPage);
//     }, [currentPage]);

//     const bringFromServer = (page) => {
//         httpGetAllParrots(page)
//             .then(res => {
//                 setArr(res.data);
//             })
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת המוצרים");
//             });
//     };

//     const handleDelete = (id) => {
//         httpDeleteParrot(id)
//             .then(() => {
//                 alert("מוצר נמחק בהצלחה");
//                 setArr(arr.filter(product => product._id !== id));
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//     };

//     return (
//         <Box sx={{ p: 3 }}>

//             <Grid container spacing={3}>
//                 {arr.map(item => (
//                     <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
//                         <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
//                             <CardMedia
//                                 component="img"
//                                 height="200"
//                                 image={item.image}
//                                 alt={item.nameproduct}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     {item.nameproduct}
//                                 </Typography>
//                                 <Typography variant="body1" color="text.secondary">
//                                     מחיר: {item.price} ₪
//                                 </Typography>
//                             </CardContent>
//                             <CardActions sx={{ mt: 'auto', justifyContent: 'space-between' }}>
//                                 {user?.role !== "ADMIN" && (

//                                     <Button 
//                                         variant="outlined"
//                                         onClick={() => dispatch(addToCart(item))}
//                                         sx={{
//                                             borderRadius: "50%",
//                                             minWidth: "40px",
//                                             width: "40px",
//                                             height: "40px",
//                                             fontSize: "20px",
//                                             display: "flex",
//                                             alignItems: "center",
//                                             justifyContent: "center",
//                                             padding: 0,
//                                             backgroundColor: "transparent", // רקע שקוף
//                                             border: "1px solid black", // מסגרת בצבע בז'
//                                             color: "black", // צבע האייקון/טקסט בבז'
//                                             "&:hover": {
//                                                 backgroundColor: "black", // הופך לבז' בלחיצה
//                                                 color: "white"
//                                             }
//                                         }}
//                                     >
//                                         +
//                                     </Button>
//                                 )}
//                                 {user?.role === "ADMIN" && (
//                                     <>
//                                         <Button variant="outlined" color="error" onClick={() => handleDelete(item._id)}>
//                                             מחק מוצר
//                                         </Button>
//                                         <Button variant="outlined" color="secondary" onClick={() => navigate("/AddOrUpdateProduct", { state: { product: item } })}>
//                                             עדכן מוצר
//                                         </Button>
//                                     </>
//                                 )}
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//             <Box display="flex" justifyContent="center" mt={3}>
//                 <Pagination count={pagesCnt} page={currentPage} onChange={(e, value) => setCurrentPage(value)} color="primary" />
//             </Box>
//         </Box>
//     );
// };

// export default ParrotList;


// import { useEffect, useState } from "react";
// import { httpGetAllParrots, httpDeleteParrot, httpGetTotalPagesCount } from "../api/parrotService";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions, Pagination, Box } from "@mui/material";
// import SmallShoppingCart from "./SmallShoppingCart"; // ייבוא הקומפוננטה של סל קניות מוקטן

// const ParrotList = () => {
//     let user = useSelector(state => state.user.currentUser);
//     let [arr, setArr] = useState([]);
//     let [pagesCnt, setPagesCnt] = useState(null);
//     let [currentPage, setCurrentPage] = useState(1);
//     let [showCart, setShowCart] = useState(false); // מצב להצגת סל הקניות המוקטן
//     let dispatch = useDispatch();
//     let navigate = useNavigate();

//     useEffect(() => {
//         bringFromServer(currentPage)
//         // window.scrollTo(0, 0);
//     }, [currentPage]);

//     useEffect(() => {
//         bringPageCnt();
//     }, [])

//     const bringPageCnt = () => {
//         httpGetTotalPagesCount()
//             .then(res => {
//                 setPagesCnt(res.data.pages);
//                 // alert(res.data.pages)
//             })
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת מספר עמודים");
//             });
//     }

//     const bringFromServer = (currentPage) => {
//         httpGetAllParrots(currentPage)
//             .then(res => {
//                 setArr(res.data);
//                 window.scrollTo(0, 0);
//             })
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת המוצרים");
//             });

//     };

//     // useEffect(() => {
//     //     bringFromServer(currentPage);
//     //     window.scrollTo(0, 0); // גלילה מיידית לראש הדף
//     // }, [currentPage]);

//     const handleDelete = (id) => {
//         httpDeleteParrot(id)
//             .then(() => {
//                 alert("מוצר נמחק בהצלחה");
//                 setArr(arr.filter(product => product._id !== id));
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//     };

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item)); // מוסיף את הפריט לעגלה
//         setShowCart(true); // מציג את סל הקניות המוקטן

//         // הסתרה אוטומטית אחרי 3 שניות
//         setTimeout(() => {
//             setShowCart(false);
//         }, 3000);
//     };

//     return (
//         <Box sx={{ p: 3 }}>

//             {/* סל הקניות המוקטן - יוצג בצד שמאל מתחת לנאבר */}
//             {showCart && (
//                 <Box sx={{
//                     position: "fixed",
//                     top: "70px", // גובה מתחת לנאבר
//                     left: "10px",
//                     backgroundColor: "white",
//                     boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//                     padding: "10px",
//                     borderRadius: "8px",
//                     zIndex: 1000
//                 }}>
//                     <SmallShoppingCart />
//                 </Box>
//             )}

//             <Grid container spacing={3}>
//                 {arr.map(item => (
//                     <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
//                         <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
//                             <CardMedia
//                                 // component="img"
//                                 // height="200"
//                                 // image={item.image}
//                                 // alt={item.nameproduct}
//                                 component="img"
//                                 height="200"
//                                 image={item.image}
//                                 alt={item.nameproduct}
//                                 sx={{ cursor: "pointer" }} // כדי לסמן שהוא לחיץ
//                                 onClick={() => navigate("/parrot", { state: { product: item } })}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     {item.nameproduct}
//                                 </Typography>
//                                 <Typography variant="body1" color="text.secondary">
//                                     מחיר: {item.price} ₪
//                                 </Typography>
//                             </CardContent>
//                             <CardActions sx={{ mt: 'auto', justifyContent: 'space-between' }}>
//                                 {user?.role !== "ADMIN" && (
//                                     <Button
//                                         variant="outlined"
//                                         onClick={() => handleAddToCart(item)}
//                                         sx={{
//                                             borderRadius: "50%",
//                                             minWidth: "40px",
//                                             width: "40px",
//                                             height: "40px",
//                                             fontSize: "20px",
//                                             display: "flex",
//                                             alignItems: "center",
//                                             justifyContent: "center",
//                                             padding: 0,
//                                             backgroundColor: "transparent",
//                                             border: "1px solid black",
//                                             color: "black",
//                                             "&:hover": {
//                                                 backgroundColor: "black",
//                                                 color: "white"
//                                             }
//                                         }}
//                                     >
//                                         +
//                                     </Button>
//                                 )}
//                                 {user?.role === "ADMIN" && (
//                                     <>
//                                         <Button variant="outlined" color="error" onClick={() => handleDelete(item._id)}>
//                                             מחק מוצר
//                                         </Button>
//                                         <Button variant="outlined" color="secondary" onClick={() => navigate("/AddOrUpdateProduct", { state: { product: item } })}>
//                                             עדכן מוצר
//                                         </Button>
//                                     </>
//                                 )}
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//             <Box display="flex" justifyContent="center" mt={3}>
//                 <Pagination count={pagesCnt} page={currentPage} onChange={(e, value) => setCurrentPage(value)} color="primary" />
//             </Box>
//         </Box>
//     );
// };

// export default ParrotList;

// import { useEffect, useState } from "react";
// import {
//     httpGetAllParrots,
//     httpDeleteParrot,
//     httpGetTotalPagesCount
// } from "../api/parrotService";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";
// import {
//     Grid,
//     Card,
//     CardMedia,
//     CardContent,
//     Typography,
//     Button,
//     CardActions,
//     Pagination,
//     Box,
//     CircularProgress
// } from "@mui/material";
// import SmallShoppingCart from "./SmallShoppingCart";

// const ParrotList = () => {
//     const user = useSelector(state => state.user.currentUser);
//     const [arr, setArr] = useState([]);
//     const [pagesCnt, setPagesCnt] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showCart, setShowCart] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     useEffect(() => {
//         bringFromServer(currentPage);
//     }, [currentPage]);

//     useEffect(() => {
//         bringPageCnt();
//     }, []);

//     const bringPageCnt = () => {
//         httpGetTotalPagesCount()
//             .then(res => {
//                 setPagesCnt(res.data.pages);
//             })
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת מספר עמודים");
//             });
//     };

//     const bringFromServer = (page) => {
//         setLoading(true);
//         // גלילה למעלה מיידית בלי קפיצה גלויה
//         window.scrollTo({ top: 0, behavior: 'instant' });

//         httpGetAllParrots(page)
//             .then(res => {
//                 setArr(res.data);
//             })
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת המוצרים");
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     };

//     const handleDelete = (id) => {
//         httpDeleteParrot(id)
//             .then(() => {
//                 alert("מוצר נמחק בהצלחה");
//                 setArr(arr.filter(product => product._id !== id));
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//     };

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));
//         setShowCart(true);
//         setTimeout(() => {
//             setShowCart(false);
//         }, 3000);
//     };

//     return (
//         <Box sx={{ p: 3 }}>
//             {/* סל קניות מוקטן */}
//             {showCart && (
//                 <Box sx={{
//                     position: "fixed",
//                     top: "70px",
//                     left: "10px",
//                     backgroundColor: "white",
//                     boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//                     padding: "10px",
//                     borderRadius: "8px",
//                     zIndex: 1000
//                 }}>
//                     <SmallShoppingCart />
//                 </Box>
//             )}

//             {/* אם בטעינה - הצג ספינר */}
//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
//                     <CircularProgress sx={{ color: 'grey.600' }}/>
//                 </Box>
//             ) : (
//                 <>
//                     <Grid container spacing={3}>
//                         {arr.map(item => (
//                             <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
//                                 <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
//                                     <CardMedia
//                                         component="img"
//                                         height="200"
//                                         image={item.image}
//                                         alt={item.nameproduct}
//                                         sx={{ cursor: "pointer" }}
//                                         onClick={() => navigate("/parrot", { state: { product: item } })}
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h6" component="div">
//                                             {item.nameproduct}
//                                         </Typography>
//                                         <Typography variant="body1" color="text.secondary">
//                                             מחיר: {item.price} ₪
//                                         </Typography>
//                                     </CardContent>
//                                     <CardActions sx={{ mt: 'auto', justifyContent: 'space-between' }}>
//                                         {user?.role !== "ADMIN" && (
//                                             <Button
//                                                 variant="outlined"
//                                                 onClick={() => handleAddToCart(item)}
//                                                 sx={{
//                                                     borderRadius: "50%",
//                                                     minWidth: "40px",
//                                                     width: "40px",
//                                                     height: "40px",
//                                                     fontSize: "20px",
//                                                     display: "flex",
//                                                     alignItems: "center",
//                                                     justifyContent: "center",
//                                                     padding: 0,
//                                                     backgroundColor: "transparent",
//                                                     border: "1px solid black",
//                                                     color: "black",
//                                                     "&:hover": {
//                                                         backgroundColor: "black",
//                                                         color: "white"
//                                                     }
//                                                 }}
//                                             >
//                                                 +
//                                             </Button>
//                                         )}
//                                         {user?.role === "ADMIN" && (
//                                             <>
//                                                 <Button
//                                                     variant="outlined"
//                                                     color="error"
//                                                     onClick={() => handleDelete(item._id)}
//                                                 >
//                                                     מחק מוצר
//                                                 </Button>
//                                                 <Button
//                                                     variant="outlined"
//                                                     color="secondary"
//                                                     onClick={() => navigate("/AddOrUpdateProduct", { state: { product: item } })}
//                                                 >
//                                                     עדכן מוצר
//                                                 </Button>
//                                             </>
//                                         )}
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>

//                     <Box display="flex" justifyContent="center" mt={3}>
//                         <Pagination
//                             count={pagesCnt}
//                             page={currentPage}
//                             onChange={(e, value) => setCurrentPage(value)}
//                             color="primary"
//                         />
//                     </Box>
//                 </>
//             )}
//         </Box>
//     );
// };

// export default ParrotList;
// import { useEffect, useRef, useState } from "react";
// import {
//     httpGetAllParrots,
//     httpDeleteParrot,
//     httpGetTotalPagesCount
// } from "../api/parrotService";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";
// import {
//     Grid,
//     Card,
//     CardMedia,
//     CardContent,
//     Typography,
//     Button,
//     CardActions,
//     Pagination,
//     Box,
//     CircularProgress,
//     Fade
// } from "@mui/material";
// import SmallShoppingCart from "./SmallShoppingCart";

// const ParrotList = () => {
//     const user = useSelector(state => state.user.currentUser);
//     const [arr, setArr] = useState([]);
//     const [pagesCnt, setPagesCnt] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showCart, setShowCart] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [hoveringCart, setHoveringCart] = useState(false);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const cartRef = useRef(null);

//     useEffect(() => {
//         bringFromServer(currentPage);
//     }, [currentPage]);

//     useEffect(() => {
//         bringPageCnt();
//     }, []);

//     const bringPageCnt = () => {
//         httpGetTotalPagesCount()
//             .then(res => setPagesCnt(res.data.pages))
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת מספר עמודים");
//             });
//     };

//     const bringFromServer = (page) => {
//         setLoading(true);
//         // window.scrollTo({ top: 0, behavior: 'instant' });
//         window.scrollTo({ top: 0, behavior: 'auto' });
//         httpGetAllParrots(page)
//             .then(res => setArr(res.data))
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת המוצרים");
//             })
//             .finally(() => setLoading(false));
//     };

//     const handleDelete = (id) => {
//         httpDeleteParrot(id)
//             .then(() => {
//                 alert("מוצר נמחק בהצלחה");
//                 setArr(arr.filter(product => product._id !== id));
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//     };

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));
//         setShowCart(true);
//     };

//     // סגירת סל בלחיצה מחוץ לו (אם לא מרחפים עליו)
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (cartRef.current && !cartRef.current.contains(event.target) && !hoveringCart) {
//                 setShowCart(false);
//             }
//         };

//         const handleScroll = () => {
//             if (!hoveringCart) {
//                 setShowCart(false);
//             }
//         };

//         if (showCart) {
//             document.addEventListener("mousedown", handleClickOutside);
//             window.addEventListener("scroll", handleScroll);
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [showCart, hoveringCart]);

//     return (
//         <Box sx={{ p: 3 }}>
//             {/* סל קניות מוקטן */}
//             <Fade in={showCart}>
//                 <Box
//                     ref={cartRef}
//                     sx={{
//                         position: "fixed",
//                         top: "70px",
//                         left: "10px",
//                         backgroundColor: "white",
//                         boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//                         padding: "10px",
//                         borderRadius: "8px",
//                         zIndex: 1000,
//                         display: showCart ? "block" : "none"
//                     }}
//                     onMouseEnter={() => setHoveringCart(true)}
//                     onMouseLeave={() => setHoveringCart(false)}
//                 >
//                     <SmallShoppingCart />
//                 </Box>
//             </Fade>

//             {/* ספינר בעת טעינה */}
//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
//                     <CircularProgress sx={{ color: 'grey.600' }} />
//                 </Box>
//             ) : (
//                 <>
//                     <Grid container spacing={3}>
//                         {arr.map(item => (
//                             <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
//                                 <Card elevation={0} sx={{
//                                     maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%', boxShadow: "none",
//                                     border: "none",
//                                 }}>
//                                     <CardMedia
//                                         component="img"
//                                         height="250"
//                                         image={item.image}
//                                         alt={item.nameproduct}
//                                         sx={{ cursor: "pointer" }}
//                                         onClick={() => navigate("/parrot", { state: { product: item } })}
//                                     />
//                                     {/* <CardContent>
//                                         <Typography gutterBottom variant="h6" component="div">
//                                             {item.nameproduct}
//                                         </Typography>
//                                         <Typography variant="body1" color="text.secondary">
//                                             מחיר: {item.price} ₪
//                                         </Typography>
//                                     </CardContent> */}
//                                     <CardContent sx={{ p: 1.2, direction: 'rtl' }}>
//                                         <Typography
//                                             variant="body2"
//                                             sx={{
//                                                 fontWeight: 500,
//                                                 fontSize: "0.85rem",
//                                                 color: "text.primary",
//                                                 mb: 0.5,
//                                                 lineHeight: 1.3
//                                             }}
//                                         >
//                                             {item.nameproduct}
//                                         </Typography>
//                                         <Typography
//                                             variant="body2"
//                                             sx={{
//                                                 fontSize: "0.85rem",
//                                                 color: "text.secondary",
//                                                 lineHeight: 1.3
//                                             }}
//                                         >
//                                             מחיר: {item.price} ₪
//                                         </Typography>
//                                     </CardContent>
//                                     <CardActions sx={{ mt: 'auto', justifyContent: 'space-between' }}>
//                                         {/* {user?.role !== "ADMIN" && (
//                                             <Button
//                                                 variant="outlined"
//                                                 onClick={() => handleAddToCart(item)}
//                                                 sx={{
//                                                     borderRadius: "50%",
//                                                     minWidth: "40px",
//                                                     width: "40px",
//                                                     height: "40px",
//                                                     fontSize: "22px",
//                                                     display: "flex",
//                                                     alignItems: "center",
//                                                     justifyContent: "center",
//                                                     padding: 0,
//                                                     backgroundColor: "transparent",
//                                                     border: "3px solid black",
//                                                     color: "black",
//                                                     "&:hover": {
//                                                         backgroundColor: "black",
//                                                         color: "white"
//                                                     }
//                                                 }}
//                                             >
//                                                 +
//                                             </Button>
//                                         )} */}
//                                         {user?.role === "ADMIN" && (
//                                             <>
//                                                 <Button
//                                                     variant="outlined"
//                                                     color="error"
//                                                     onClick={() => handleDelete(item._id)}
//                                                 >
//                                                     מחק מוצר
//                                                 </Button>
//                                                 <Button
//                                                     variant="outlined"
//                                                     color="secondary"
//                                                     onClick={() => navigate("/AddOrUpdateProduct", { state: { product: item } })}
//                                                 >
//                                                     עדכן מוצר
//                                                 </Button>
//                                             </>
//                                         )}
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>

//                     <Box display="flex" justifyContent="center" mt={3}>
//                         <Pagination
//                             count={pagesCnt}
//                             page={currentPage}
//                             onChange={(e, value) => setCurrentPage(value)}
//                             color="primary"
//                         />
//                     </Box>
//                 </>
//             )}
//         </Box>
//     );
// };

// export default ParrotList;

// import { useEffect, useRef, useState } from "react";
// import {
//     httpGetAllParrots,
//     httpDeleteParrot,
//     httpGetTotalPagesCount
// } from "../api/parrotService";

// import { addToCart } from "../features/cartSlice";
// import { Edit, Delete } from "@mui/icons-material";

// import { useNavigate } from "react-router-dom";
// import {
//     Grid,
//     Card,
//     CardMedia,
//     CardContent,
//     Typography,
//     Button,
//     CardActions,
//     Pagination,
//     Box,
//     CircularProgress,
//     Fade,
//     IconButton,
//     Tooltip,
//     Dialog,
//     DialogTitle,
//     DialogActions
// } from "@mui/material";
// import { Favorite, FavoriteBorder } from "@mui/icons-material";

// import SmallShoppingCart from "./SmallShoppingCart";
// import { useDispatch, useSelector } from "react-redux";

// const ParrotList = () => {
//     const user = useSelector(state => state.user.currentUser);
//     const [arr, setArr] = useState([]);
//     const [pagesCnt, setPagesCnt] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showCart, setShowCart] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [hoveringCart, setHoveringCart] = useState(false);
//     const [likedItems, setLikedItems] = useState({}); // שמירה זמנית של הלבבות
//     const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // הוספת מצב לדיאלוג מחיקה
//     const [selectedToDelete, setSelectedToDelete] = useState(null); // הוספת מצב לפריט למחיקה

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const cartRef = useRef(null);

//     useEffect(() => {
//         bringFromServer(currentPage);
//     }, [currentPage]);

//     useEffect(() => {
//         bringPageCnt();
//     }, []);

//     const bringPageCnt = () => {
//         httpGetTotalPagesCount()
//             .then(res => setPagesCnt(res.data.pages))
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת מספר עמודים");
//             });
//     };

//     const bringFromServer = (page) => {
//         setLoading(true);
//         window.scrollTo({ top: 0, behavior: 'auto' });
//         httpGetAllParrots(page)
//             .then(res => setArr(res.data))
//             .catch(err => {
//                 console.log(err);
//                 alert("תקלה בשליפת המוצרים");
//             })
//             .finally(() => setLoading(false));
//     };

//     const confirmDelete = (id) => {
//         setSelectedToDelete(id);
//         setDeleteDialogOpen(true);
//     };

//     const handleDeleteConfirmed = () => {
//         httpDeleteParrot(selectedToDelete)
//             .then(() => {
//                 alert("המוצר נמחק בהצלחה");
//                 setArr(arr.filter((product) => product._id !== selectedToDelete));
//             })
//             .catch((err) => console.log(err.message))
//             .finally(() => {
//                 setDeleteDialogOpen(false);
//                 setSelectedToDelete(null);
//             });
//     };

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));
//         setShowCart(true);
//     };

//     const toggleLike = (id) => {
//         setLikedItems(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     // סגירת סל בלחיצה מחוץ לו
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (cartRef.current && !cartRef.current.contains(event.target) && !hoveringCart) {
//                 setShowCart(false);
//             }
//         };

//         const handleScroll = () => {
//             if (!hoveringCart) {
//                 setShowCart(false);
//             }
//         };

//         if (showCart) {
//             document.addEventListener("mousedown", handleClickOutside);
//             window.addEventListener("scroll", handleScroll);
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [showCart, hoveringCart]);

//     return (
//         <Box sx={{ p: 3 }}>
//             <Fade in={showCart}>
//                 <Box
//                     ref={cartRef}
//                     sx={{
//                         position: "fixed",
//                         top: "70px",
//                         left: "10px",
//                         backgroundColor: "white",
//                         boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//                         padding: "10px",
//                         borderRadius: "8px",
//                         zIndex: 1000,
//                         display: showCart ? "block" : "none"
//                     }}
//                     onMouseEnter={() => setHoveringCart(true)}
//                     onMouseLeave={() => setHoveringCart(false)}
//                 >
//                     <SmallShoppingCart />
//                 </Box>
//             </Fade>
//             {/* דיאלוג אישור מחיקה */}
//             <Dialog
//                 open={deleteDialogOpen}
//                 onClose={() => setDeleteDialogOpen(false)}
//                 fullWidth
//                 maxWidth="xs"
//                 PaperProps={{
//                     sx: {
//                         textAlign: "center",
//                         p: 2,
//                     },
//                 }}
//             >
//                 <DialogTitle>האם אתה בטוח שברצונך למחוק את המוצר</DialogTitle>
//                 <DialogActions sx={{ justifyContent: "center" }}>
//                     <Button onClick={handleDeleteConfirmed} color="error" variant="contained">
//                         מחק
//                     </Button>
//                     <Button onClick={() => setDeleteDialogOpen(false)} variant="outlined">
//                         בטל
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
//                     <CircularProgress sx={{ color: 'grey.600' }} />
//                 </Box>
//             ) : (
//                 <>
//                     <Grid container spacing={3}>
//                         {arr.map(item => (
//                             <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
//                                 <Card
//                                     elevation={0}
//                                     sx={{
//                                         maxWidth: 345,
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         height: '100%',
//                                         boxShadow: "none",
//                                         border: "none"
//                                     }}
//                                 >
//                                     <Box sx={{ position: 'relative' }}>
//                                         <CardMedia
//                                             component="img"
//                                             height="250"
//                                             image={item.image}
//                                             alt={item.nameproduct}
//                                             sx={{ cursor: "pointer" }}
//                                             onClick={() => navigate("/parrot", { state: { product: item } })}
//                                         />
//                                         <Box
//                                             sx={{
//                                                 position: 'absolute',
//                                                 bottom: 8,
//                                                 left: 8,
//                                                 display: 'flex',
//                                                 flexDirection: 'row',
//                                                 gap: 1,
//                                                 zIndex: 1
//                                             }}
//                                         >
//                                             {user?.role !== "ADMIN" && (
//                                                 <Tooltip title="הוסף לסל">
//                                                     <IconButton
//                                                         onClick={() => handleAddToCart(item)}
//                                                         sx={{
//                                                             backgroundColor: 'white',
//                                                             width: 40,
//                                                             height: 40,
//                                                             '&:hover': {
//                                                                 backgroundColor: 'gray',
//                                                             },
//                                                             '&:hover .plusIcon': {
//                                                                 color: 'white',
//                                                             }
//                                                         }}
//                                                     >
//                                                         <Typography className="plusIcon" sx={{ fontSize: 24, color: 'gray' }}>+</Typography>
//                                                     </IconButton>
//                                                 </Tooltip>
//                                             )}


//                                             <Tooltip title={likedItems[item._id] ? "הסר מהמועדפים" : "הוסף למועדפים"}>
//                                                 <IconButton
//                                                     onClick={() => toggleLike(item._id)}
//                                                     sx={{
//                                                         backgroundColor: 'white',
//                                                         '&:hover': {
//                                                             backgroundColor: '#f5f5f5'
//                                                         }
//                                                     }}
//                                                 >
//                                                     {likedItems[item._id] ? (
//                                                         <Favorite sx={{ color: 'red' }} />
//                                                     ) : (
//                                                         <FavoriteBorder sx={{ color: 'gray' }} />
//                                                     )}
//                                                 </IconButton>
//                                             </Tooltip>
//                                         </Box>

//                                     </Box>

//                                     <CardContent sx={{ p: 1.2, direction: 'rtl' }}>
//                                         <Typography
//                                             variant="body2"
//                                             sx={{
//                                                 fontWeight: 500,
//                                                 fontSize: "0.85rem",
//                                                 color: "text.primary",
//                                                 mb: 0.5,
//                                                 lineHeight: 1.3
//                                             }}
//                                         >
//                                             {item.nameproduct}
//                                         </Typography>
//                                         <Typography
//                                             variant="body2"
//                                             sx={{
//                                                 fontSize: "0.85rem",
//                                                 color: "text.secondary",
//                                                 lineHeight: 1.3
//                                             }}
//                                         >
//                                             מחיר: {item.price} ₪
//                                         </Typography>
//                                     </CardContent>


//                                     <CardActions sx={{ mt: 'auto', justifyContent: 'flex-start' }}>

//                                         {user?.role === "ADMIN" && (
//                                             <Box display="flex" gap={1}>
//                                                 <Tooltip title="מחק מוצר">
//                                                     <IconButton
//                                                         onClick={() => confirmDelete(item._id)}
//                                                         sx={{ color: "#424242" }}
//                                                     >
//                                                         <Delete />
//                                                     </IconButton>
//                                                 </Tooltip>

//                                                 <Tooltip title="עדכן מוצר">
//                                                     <IconButton
//                                                         onClick={() =>
//                                                             navigate("/AddOrUpdateProduct", {
//                                                                 state: { product: item },
//                                                             })
//                                                         }
//                                                         sx={{ color: "#424242" }}
//                                                     >
//                                                         <Edit />
//                                                     </IconButton>
//                                                 </Tooltip>
//                                             </Box>
//                                         )}
//                                     </CardActions>


//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>

//                     {/* <Box display="flex" justifyContent="center" mt={3}>
//                         <Pagination
//                             count={pagesCnt}
//                             page={currentPage}
//                             onChange={(e, value) => setCurrentPage(value)}
//                             color="primary"
//                         />
//                     </Box> */}
//                     <Box display="flex" justifyContent="center" mt={3}>
//     <Pagination
//         count={pagesCnt}
//         page={currentPage}
//         onChange={(e, value) => setCurrentPage(value)}
//         sx={{
//             '& .MuiPaginationItem-root': {
//                 color: 'black',
//                 borderColor: 'black',
//             },
//             '& .Mui-selected': {
//                 backgroundColor: 'black',
//                 color: 'white',
//                 '&:hover': {
//                     backgroundColor: '#333',
//                 },
//             },
//         }}
//     />
// </Box>

//                 </>
//             )}
//         </Box>
//     );
// };

// export default ParrotList;
import { useEffect, useRef, useState } from "react";
import {
    httpGetAllParrots,
    httpDeleteParrot,
    httpGetTotalPagesCount
} from "../api/parrotService";

import { addToCart } from "../features/cartSlice";
import { Edit, Delete } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions,
    Pagination,
    Box,
    CircularProgress,
    Fade,
    IconButton,
    Tooltip,
    Dialog,
    DialogTitle,
    DialogActions,
    Snackbar,
    Alert as MuiAlert
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import SmallShoppingCart from "./SmallShoppingCart";
import { useDispatch, useSelector } from "react-redux";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ParrotList = () => {
    const user = useSelector(state => state.user.currentUser);
    const [arr, setArr] = useState([]);
    const [pagesCnt, setPagesCnt] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [loading, setLoading] = useState(false);
    const [hoveringCart, setHoveringCart] = useState(false);
    const [likedItems, setLikedItems] = useState({});
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedToDelete, setSelectedToDelete] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartRef = useRef(null);

    useEffect(() => {
        bringFromServer(currentPage);
    }, [currentPage]);

    useEffect(() => {
        bringPageCnt();
    }, []);

    const bringPageCnt = () => {
        httpGetTotalPagesCount()
            .then(res => setPagesCnt(res.data.pages))
            .catch(err => {
                console.log(err);
                setSnackbarMsg("תקלה בשליפת מספר עמודים");
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
            });
    };

    const bringFromServer = (page) => {
        setLoading(true);
        window.scrollTo({ top: 0, behavior: 'auto' });
        httpGetAllParrots(page)
            .then(res => setArr(res.data))
            .catch(err => {
                console.log(err);
                setSnackbarMsg("תקלה בשליפת המוצרים");
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
            })
            .finally(() => setLoading(false));
    };

    const confirmDelete = (id) => {
        setSelectedToDelete(id);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirmed = () => {
        httpDeleteParrot(selectedToDelete)
            .then(() => {
                setSnackbarMsg("המוצר נמחק בהצלחה");
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
                setArr(arr.filter((product) => product._id !== selectedToDelete));
            })
            .catch((err) => console.log(err.message))
            .finally(() => {
                setDeleteDialogOpen(false);
                setSelectedToDelete(null);
            });
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        setShowCart(true);
    };

    const toggleLike = (id) => {
        setLikedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target) && !hoveringCart) {
                setShowCart(false);
            }
        };

        const handleScroll = () => {
            if (!hoveringCart) {
                setShowCart(false);
            }
        };

        if (showCart) {
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showCart, hoveringCart]);

    return (
        <Box sx={{ p: 3 }}>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
                    {snackbarMsg}
                </Alert>
            </Snackbar>

            {/*סל המוקטו מעבר עכבר*/}
            <Fade in={showCart}>
                <Box
                    ref={cartRef}
                    sx={{
                        position: "fixed",
                        top: "70px",
                        left: "10px",
                        backgroundColor: "white",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                        padding: "10px",
                        borderRadius: "8px",
                        zIndex: 1000,
                        display: showCart ? "block" : "none"
                    }}
                    onMouseEnter={() => setHoveringCart(true)}
                    onMouseLeave={() => setHoveringCart(false)}
                >
                    <SmallShoppingCart />
                </Box>
            </Fade>

            {/* למחיקה */}
            <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                fullWidth
                maxWidth="xs"
                PaperProps={{
                    sx: {
                        textAlign: "center",
                        p: 2,
                    },
                }}
            >
                <DialogTitle>האם אתה בטוח שברצונך למחוק את המוצר</DialogTitle>
                <DialogActions sx={{ justifyContent: "center" }}>
                    <Button onClick={handleDeleteConfirmed} color="error" variant="contained">
                        מחק
                    </Button>
                    <Button onClick={() => setDeleteDialogOpen(false)} variant="outlined">
                        בטל
                    </Button>
                </DialogActions>
            </Dialog>

            {/* עיגול המתנה */}
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                    <CircularProgress sx={{ color: 'grey.600' }} />
                </Box>
            ) : (
                <>
                    {/* תצוגת הכרטיסים */}
                    <Grid container spacing={3}>
                        {arr.map(item => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                                <Card elevation={0} sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%', boxShadow: "none", border: "none" }}>
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={item.image}
                                            alt={item.nameproduct}
                                            sx={{ cursor: "pointer" }}
                                            onClick={() => navigate("/parrot", { state: { product: item } })}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 8,
                                                left: 8,
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: 1,
                                                zIndex: 1
                                            }}
                                        >
                                            {user?.role !== "ADMIN" && (
                                                <Tooltip title="הוסף לסל">
                                                    <IconButton
                                                        onClick={() => handleAddToCart(item)}
                                                        sx={{
                                                            backgroundColor: 'white',
                                                            width: 40,
                                                            height: 40,
                                                            '&:hover': { backgroundColor: 'gray' },
                                                            '&:hover .plusIcon': { color: 'white' }
                                                        }}
                                                    >
                                                        <Typography className="plusIcon" sx={{ fontSize: 24, color: 'gray' }}>+</Typography>
                                                    </IconButton>
                                                </Tooltip>
                                            )}
                                            {/* סימון מועדף */}
                                            <Tooltip title={likedItems[item._id] ? "הסר מהמועדפים" : "הוסף למועדפים"}>
                                                <IconButton
                                                    onClick={() => toggleLike(item._id)}
                                                    sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#f5f5f5' } }}
                                                >
                                                    {likedItems[item._id] ? (
                                                        <Favorite sx={{ color: 'red' }} />
                                                    ) : (
                                                        <FavoriteBorder sx={{ color: 'gray' }} />
                                                    )}
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                    {/* פרטי כרטיס בתצוגה */}
                                    <CardContent sx={{ p: 1.2, direction: 'rtl' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "0.85rem", color: "text.primary", mb: 0.5, lineHeight: 1.3 }}>
                                            {item.nameproduct}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: "0.85rem", color: "text.secondary", lineHeight: 1.3 }}>
                                            מחיר: {item.price} ₪
                                        </Typography>
                                    </CardContent>

                                    {/* כפתורים של כרטיס */}
                                    <CardActions sx={{ mt: 'auto', justifyContent: 'flex-start' }}>
                                        {user?.role === "ADMIN" && (
                                            <Box display="flex" gap={1}>
                                                <Tooltip title="מחק מוצר">
                                                    <IconButton onClick={() => confirmDelete(item._id)} sx={{ color: "#424242" }}>
                                                        <Delete />
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip title="עדכן מוצר">
                                                    <IconButton onClick={() => navigate("/AddOrUpdateProduct", { state: { product: item } })} sx={{ color: "#424242" }}>
                                                        <Edit />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                        )}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* כפתורי מעבר דפים */}
                    <Box display="flex" justifyContent="center" mt={3}>
                        <Pagination
                            count={pagesCnt}
                            page={currentPage}
                            onChange={(e, value) => setCurrentPage(value)}
                            sx={{
                                '& .MuiPaginationItem-root': { color: 'black', borderColor: 'black' },
                                '& .Mui-selected': { backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }
                            }}
                        />
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ParrotList;
