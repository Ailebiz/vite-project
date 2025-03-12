// import { useState } from "react";

// export default function AuthApp() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isRegistering, setIsRegistering] = useState(false);

//   return (
//     <div>
//       {!isLoggedIn ? (
//         isRegistering ? (
//           <div>
//             <h2>Тіркелу</h2>
//             <input type="text" placeholder="Email немесе телефон" />
//             <input type="password" placeholder="Құпия сөз" />
//             <button onClick={() => setIsRegistering(false)}>Register</button>
//           </div>
//         ) : (
//           <div>
//             <h2>Жүйеге кіру қажет</h2>
//             <button onClick={() => setIsLoggedIn(true)}>Login</button>
//             <button onClick={() => setIsRegistering(true)}>Register</button>
//           </div>
//         )
//       ) : (
//         <div>
//           <h2>Бастапқы бетке қош келдіңіз</h2>
//           <button onClick={() => setIsLoggedIn(false)}>Log out</button>
//         </div>
//       )}
//     </div>
//   );
// }



