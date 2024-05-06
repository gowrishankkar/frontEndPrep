import { useState, useEffect } from "react";

// Create a React component that fetches data from an API and displays it in a list. The API endpoint is https://api.example.com/data,
// and the response is an array of objects, each containing an id and a name property. Display the names page.

// Requirements:
// Use the useState hook to manage the fetched data.
// Implement error handling for the API request.
// Display a loading message while the data is being fetched.
// Feel free to use any package or library you find necessary, and make sure to structure your component in a clear and maintainable way.

// Example API Response:
// json
// [
//   {"id": 1, "name": "Item 1"},
//   {"id": 2, "name": "Item 2"},
//   {"id": 3, "name": "Item 3"}
// ]

const initialData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];
const JSprep = () => {
  const [data, setData] = useState(initialData);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await fetch("https://api.example.com/data");
      const resdata = response.JSON();
      setData(resdata);
      setLoader(false);
    } catch {
      setLoader(false);
      console.log("API failed");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loader ? (
        <h2>API is Loading ...</h2>
      ) : (
        <>
          {data.map((ele, index) => {
            return (
              <>
                <h4 key={index}>{ele.name}</h4> <br />{" "}
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default JSprep;
