import dbConnect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  try {
    await dbConnect();
    if (request.method === "GET") {
      const recipes = await Recipe.find();
      return response.status(200).json(recipes);
    }
  } catch (error) {
    console.error("Error while Fetching", error);
    return response.status(500).json({ error: "Internal Server Error!" });
  }

  if (request.method === "POST") {
    await dbConnect();
    try {
      const recipeData = request.body;
      if (!recipeData.hasOwnProperty("editable")) {
        recipeData.editable = true;
      }
      await Recipe.create(recipeData);

      response.status(201).json({ status: "Recipe created." });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  // if (request.method === "DELETE") {
  //   await dbConnect();
  //   try {
  //     const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
  //     if (response.ok) {
  //       push("/");
  //     } else {
  //       console.log(response.status);
  //     }
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //     response.status(400).json({ error: error.message });
  //   }
  // }
}
