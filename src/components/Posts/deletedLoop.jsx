// {
//   Object.entries(detailItem).map((item, index) => {
//     console.log(item);
//     console.log(typeof(item[1]));
//     return (
//       item[1] && (
//       <>
//        {typeof(item[1]) !== 'object' ? 
//           <>
//             <p> <strong key={index}> {item[0]} : </strong> {item[1]}</p> 
//           </>
//           : 
//           <> 
//             {
//               Object.entries(item[1]).map((objItem, index2) => {
//                 console.log(objItem);
//                 return (
//                   <p>hm</p>
//                 // <p key={index2}><strong>{objItem[0]}: </strong> {objItem[1]}</p>
//                 )
//               })
//             }
            
//           </>
        
//         }
//       </>
//       )
//     )
//   })
// }