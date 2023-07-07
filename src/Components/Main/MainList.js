/* STATEFUL PARENT COMPONENT */
const MainList = ({ recipes }) => {
  return (
    <div>
      <hr />
      <div>
        <p>Below are your search results:</p>
        {/* Check that the recipes object exists */}
        {recipes.length > 0 && (
          <ul>
            {/* Using getter for recipes Object to display recipe data */}
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                {" "}
                {recipe.get("Name")} | {recipe.get("url")}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default MainList;
