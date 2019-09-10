const { Stitch, RemoteMongoClient, BSON } = stitch;

const stitchApp = Stitch.initializeDefaultAppClient("<Your App ID>");
const mongodb = stitchApp.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
const itemsCollection = mongodb.db("store").collection("items");
const purchasesCollection = mongodb.db("store").collection("purchases");