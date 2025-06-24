import locationModel from "@/models/userLocation";
import connect from "@/config/mongoose";
import MapWrapperClient from "./MapWrapperClient";

export async function fetchCoords() {
  try {
    await connect();
    const rawDatas =  await locationModel.find().select("-ip");
    return rawDatas.map((rawData) => ({
      ...rawData.toObject(),
      _id : rawData._id.toString()
    }))
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}

export default async function MapWrapper() {
  return <MapWrapperClient allUserCoords={await fetchCoords()} />;
}
