import { useState } from "react";
function Form() {
    return (
        <>
        <div class="container">
         <form name="searchParam" value="formData.searchParam" onSubmit={handleSubmit}>
          <label For="search">search:</label>
          <input type="text" />
          <button type="submit" class="btn">Getchdata</button>
          </form> 
        </div>  
      </>
    );
}
export default Form