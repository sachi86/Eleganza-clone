// const modal = ({showModal}) => {
//   return (
//     <AnimatePresence exitBeforeEnter>
//       {showModal && (
//         <motion.div
//           initial={{opacity: 0}}
//           animate={{opacity: 1}}
//           exit={{opacity: 0}}
//           className="modal"
//         >
//           <div className="modal--container">
//             <div className="modal--content">
//               <div className="modal--content--title">
//                 <h1>
//                   <span>
//                     <Link to="/">
//                       <img
//                         src="https://www.eleganza.fr/wp-content/uploads/2020/03/logo-eleganza-blanc.png"
//                         alt="logo"
//                       />
//                     </Link>
//                   </span>
//                 </h1>
//               </div>
//               <div className="modal--content--dropdown">
//                 <Dropdown dropDown={dropDowns} />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
