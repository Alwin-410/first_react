/*import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App*/

/*import React from 'react';
import './App.css';
import assets from './assets/index.jsx';
import Button from './components/ui/button/index.jsx';
const App = () => { 
  const handleClick = () => {alert("Hello, Vite+React");
    console.log("Button clicked");
  };
  return(
    <div className='container'>
      <h1 className="greet">Hello,Vite+React</h1>
      <img src={assets.profilePic} alt="Logo" className='img'/>
       
       
       <Button
        name={"Hello, Vite+React"}
        onClick={handleClick}
      />

    </div>
  )
}
export default App;*/


/*import { useState } from 'react';
import './App.css';
import Button from './components/ui/button/index.jsx';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2>Counter: {count}</h2>

      <Button
        name="Increment (+)"
        onClick={increment}
      />

      <Button
        name="Decrement (-)"
        onClick={decrement}
      />
    </div>
  );
};

export default App;*/


/*import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  },[]);

  
  return (
    <div className="container">
      <h1>Users Details</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Street</th>
            <th>City</th>
            <th>suite</th>
            <th>Zipcode</th>
            <th>geo</th>
            <th>Company</th>
            <th>catchPhrase</th>
            <th>bs</th>   
          </tr>
        </thead>

        <tbody>
          {users.map((user) => ( 
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.address.street}</td>
              <td>{user.address.city}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.address.geo.lat}</td>
              <td>{user.company.name}</td> 
              <td>{user.company.catchPhrase}</td>  
              <td>{user.company.bs}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;*/


// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [status, setStatus] = useState(null);
//   const [error, setError] = useState("");

//   const fetchProducts = async () => {
//     setLoading(true);
//     setError("");
//     setStatus(null);

//     try {
//       const response = await fetch(
//         "https://fakestoreapi.com/products"
//       );

//       console.log("HTTP Status:", response.status);

//       // Handle HTTP errors such as 404 and 500
//       if (!response.ok) {
//         const errorMessage =
//           `Error ${response.status}: ${
//             response.statusText || "Request failed"
//           }`;

//         console.error(errorMessage);

//         setStatus(response.status);
//         setError(errorMessage);
//         setProducts([]);
//         return;
//       }

//       const data = await response.json();

//       // Validate the API response
//       if (!Array.isArray(data)) {
//         throw new Error("Invalid API response: Expected an array.");
//       }

//       // Format data as required
//       const formattedData = {
//         product: data,
//         status: data.length > 0 ? 200 : 400
//       };

//       setProducts(formattedData.product);
//       setStatus(formattedData.status);

//       if (formattedData.status === 200) {
//         console.log(
//           "200: Products fetched successfully",
//           formattedData
//         );
//       } else {
//         console.warn(
//           "400: Request succeeded, but no products were found."
//         );
//       }
//     } catch (err) {
//       console.error("Network or API Error:", err.message);

//       setStatus(0);
//       setProducts([]);
//       setError(
//         "Network error: Check your internet connection or try again later."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Search products by name
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="App">
//       <h1>Fake Store Products</h1>

//       {/* Search input */}
//       <input
//         type="text"
//         className="search-input"
//         placeholder="Search products by name..."
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//       />

//       {/* Loading state */}
//       {loading && (
//         <p className="loading-message">
//           Loading products...
//         </p>
//       )}

//       {/* Error state */}
//       {!loading && error && (
//         <div className="error-message">
//           <h3>Request Failed</h3>
//           <p>{error}</p>
//           <p>HTTP Status: {status === 0 ? "Network Error" : status}</p>

//           <button onClick={fetchProducts}>
//             Try Again
//           </button>
//         </div>
//       )}

//       {/* Success state */}
//       {!loading && !error && status === 200 && (
//         <p className="success-message">
//           Success! {products.length} products fetched successfully.
//         </p>
//       )}

//       {/* Empty API response */}
//       {!loading &&
//         !error &&
//         status === 400 && (
//           <div className="empty-message">
//             <h3>No Products Found</h3>
//             <p>
//               The request worked, but the API returned zero products.
//             </p>
//           </div>
//         )}

//       {/* Empty search results */}
//       {!loading &&
//         !error &&
//         status === 200 &&
//         filteredProducts.length === 0 && (
//           <div className="empty-message">
//             <h3>No Product Found</h3>
//             <p>Try searching with another product name.</p>
//           </div>
//         )}

//       {/* Display products */}
//       {!loading &&
//         !error &&
//         status === 200 &&
//         filteredProducts.length > 0 && (
//           <div className="product-container">
//             {filteredProducts.map((product) => (
//               <div className="product-card" key={product.id}>
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                 />

//                 <h3>{product.title}</h3>

//                 <p>{product.description}</p>

//                 <h4>Price: ${product.price}</h4>

//                 <p>Category: {product.category}</p>

//                 <p>
//                   Rating: {product.rating.rate} / 5
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//     </div>
//   );
// }

// export default App;





/*import { useState } from "react";
import Title from "./components/ui/title/index.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Title count={count} />

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </>
    );
}
export default App;*/


/*import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Your Name</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h3>Your name is: {name}</h3>
    </div>
  );
}

export default App;*/


import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    age: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>User Details Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Submitted Details</h3>
          <p>First Name: {form.firstName}</p>
          <p>Email: {form.email}</p>
          <p>Age: {form.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
