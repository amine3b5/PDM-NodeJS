import Velo from "../models/velo.js";

export const createvelo = async (req, res) => {
  try {
    const {
      image,
      type,
      prix,
      description,
      disponible,
      longitude,
      latitude,
    } = req.body;

    const newVelo = new Velo({
      image,
      type,
      prix,
      description,
      disponible,
      longitude,
      latitude,
    });

    const createdVelo = await newVelo.save();
    return res.status(200).json(createdVelo); 
  } catch (error) {
    return res.status(400).json({ errors: error.message }); 
  }
};

// Get a product by its ID
export async function getvelo(req, res) {
  const { _id } = req.params;
  try {
    const foundVelo = await Velo.findById(_id);
    if (!foundVelo)
      res.status(400).send({ errors: [{ msg: "velo n'existe pas" }] });
    else res.status(200).send({ success: { msg: "velo trouvée", foundVelo } });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: error.message }] });
  }
}

// Update a product
export async function updatevelo(req, res) {
  const { id } = req.params;

  try {
    const newVelo = req.body;
    await Velo.updateOne({ _id: id }, { $set: newVelo });
    res
      .status(200)
      .send({ success: { msg: "velo modifié avec succes", newVelo } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get a list of all products
export async function getvelos(req, res) {
  try {
    const velos = await Velo.find();
    res.status(200).json(velos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a product
export async function deletevelo(req, res) {
  try {
    const deletedVelo = await Velo.findByIdAndDelete({ _id: req.params.id });
    if (deletedVelo) {
      res.status(200).send({
        success: { msg: "velo supprimée avec succes", deletedVelo },
      });
    } else {
      res.status(404).json({ errors: { message: "Suppression echouée" } });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

