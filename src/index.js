import * as BABYLON from 'babylonjs';
import 'pepjs';

window.renderingZone = document.getElementsByTagName("BODY")[0];
var isFullScreen = false;

window.canvases = document.getElementsByTagName('canvas');

window.canvas = document.getElementById('renderCanvas');
window.iframeScene = document.getElementById("iframeScene")
window.customScreen = document.getElementById('loadingScreen');
const radToDeg = Math.PI / 180;
window.islandSelection = document.getElementById("island_color_selection");
window.islandCountertopSelection = document.getElementById("island_countertop_selection");
window.rangehoodSelection = document.getElementById("rangehood_selection");
window.islandMenu = document.getElementById("islandMenu");
window.islandCountertopMenu = document.getElementById('islandCountertopMenu');
window.rangehoodMenu = document.getElementById("rangehoodMenu");
window.list = document.getElementsByClassName("selectionMenuItem");
window.menus = document.getElementsByClassName("materialMenu");
window.switcherContainer = document.getElementById("switcher_container");

window.scene1Selection = document.getElementById("menu_scene__scene1");
window.scene2Selection = document.getElementById("menu_scene__scene2");
window.scene3Selection = document.getElementById("menu_scene__vtour");
window.sceneItems = document.getElementsByClassName("sceneItem");

window.blackLimeMaterial = document.getElementById("blackLimeCountertop");
window.whiteLimeMaterial = document.getElementById("whiteLimeCountertop");
window.countertopItems = document.getElementsByClassName("countertopItem");

window.napa1 = document.getElementById("napa1");
window.napa2 = document.getElementById("napa2");
window.napa3 = document.getElementById("napa3");
window.rangehoodItems = document.getElementsByClassName("rangehoodItem");

window.whiteCream = document.getElementById("whiteCream");
window.pumpkinCream = document.getElementById("pumpkinCream");
window.egyptianPyramid = document.getElementById("egyptianPyramid");
window.sugarMaple = document.getElementById("sugarMaple");
window.speedboat = document.getElementById("speedboat");
window.yachtBlue = document.getElementById("yachtBlue");
window.jayBird = document.getElementById("jayBird");
window.venusTeal = document.getElementById("venusTeal");
window.dragonfly = document.getElementById("dragonfly");
window.pineBrook = document.getElementById("pineBrook");
window.islandItems = document.getElementsByClassName("islandItem");

window.checkboxButton1 = document.getElementById("checkboxButton1");
window.checkboxButton2 = document.getElementById("checkboxButton2");


window.rangeSlider = document.getElementById("myRange");



window.uiToggleButton = document.getElementById("uiToggle");
let uiHidden = true;
window.menuSceneUI = document.getElementById("menuSceneUI")
window.uiElements = document.getElementsByClassName("ui");
window.fsbtn = document.getElementById("fsbtn");

let whiteCreamColor = new BABYLON.Color3(248/255, 241/255, 228/255);
let pumpkinCreamColor = new BABYLON.Color3(219/255, 186/255, 157/255);
let egyptianPyramidColor = new BABYLON.Color3(193/255, 154/255, 125/255);
let sugarMapleColor = new BABYLON.Color3(185/255, 144/255, 114/255);
let speedboatColor = new BABYLON.Color3(144/255, 191/255, 212/255);
let yachtBlueColor = new BABYLON.Color3(103/255, 155/255, 179/255);
let jayBirdColor = new BABYLON.Color3(80/255, 133/255, 158/255);
let venusTealColor = new BABYLON.Color3(133/255, 164/255, 162/255);
let dragonflyColor = new BABYLON.Color3(114/255, 144/255, 141/255);
let pineBrookColor = new BABYLON.Color3(92/255, 118/255, 105/255);

const createScene = () => {


    //create new engine
    let engine = new BABYLON.Engine(canvas, true);
   // engine.loadingUIText = "LOADING";
    var loadingScreen = new MyLoadingScreen("I'm loading!!");
        //Set the loading screen in the engine to replace the default one
    engine.loadingScreen = loadingScreen;

    BABYLON.SceneLoader.Load("assets/mesh/", "scene1.babylon", engine, function (scene) {
        
    
        scene.gravity = new BABYLON.Vector3(0, -5, 0);
        scene.collisionsEnabled = true;
        //scene.debugLayer.show();
       
        scene.clearColor = new BABYLON.Color3.White();
        scene.ambientColor = BABYLON.Color3.White();

        let camera = new BABYLON.UniversalCamera("FreeCamera", new BABYLON.Vector3(-854.3 ,25.926,104.75), scene);
        camera.applyGravity = true;
        camera.checkCollisions = true;
        camera.ellipsoid = new BABYLON.Vector3(10, 84, 10);
        camera.keysUp.push(87); // "w"
        camera.keysDown.push(83); // "s"
        camera.keysLeft.push(65); // "a"
        camera.keysRight.push(68); // "d"             
        camera.rotation.y = 2;
        camera.speed = 8;
        camera.inertia = 0.8;

        var VJC = new BABYLON.VirtualJoysticksCamera("VJC", camera.position, scene);
        VJC.rotation = camera.rotation;
        VJC.checkCollisions = camera.checkCollisions;
        VJC.applyGravity = camera.applyGravity;
        VJC.ellipsoid = camera.ellipsoid;
        VJC.speed = 10;
        VJC.inertia = 0.4;

    //ZOOM FUNCTIONALITY ON THE MOUSE WHEEL 
    scene.onPrePointerObservable.add( function(pointerInfo, eventState) {
        let event = pointerInfo.event;     

        if(event.deltaY<0 && camera.fov > 0.1) {
            camera.fov -= 0.03
        }
        else if (event.deltaY>0 && camera.fov <= 1) {
            camera.fov += 0.03
        }              
    }, BABYLON.PointerEventTypes.POINTERWHEEL, false);


        let ambientLight = scene.lights[0];
        ambientLight.intensity = 1;
        ambientLight.groundColor = new BABYLON.Color3.White();
        ambientLight.specular = new BABYLON.Color3.Black();


      
                //scene1
                let diffuseTexture_LivingRoom_Ceiling = new BABYLON.Texture("assets/textures/LivingRoom_Ceiling.jpg", scene);
                let diffuseTexture_kitchen_ceiling = new BABYLON.Texture("assets/textures/kitchen_ceiling.jpg", scene);
                let diffuseTexture_diningRoom_Ceiling = new BABYLON.Texture("assets/textures/diningRoom_Ceiling.jpg", scene);
                let diffuseTexture_LivingRoom_Floor = new BABYLON.Texture("assets/textures/LivingRoom_Floor.jpg", scene);
                let diffuseTexture_diningRoom_Floor = new BABYLON.Texture("assets/textures/diningRoom_Floor.jpg", scene);
                let diffuseTexture_kitchen_floor = new BABYLON.Texture("assets/textures/kitchen_floor.jpg", scene);
                let diffuseTexture_LivingRoom_Walls = new BABYLON.Texture("assets/textures/LivingRoom_Walls.jpg", scene);
                let diffuseTexture_stokovi = new BABYLON.Texture("assets/textures/stokovi.jpg", scene);
                let diffuseTexture_kamin = new BABYLON.Texture("assets/textures/kamin.jpg", scene);
                let diffuseTexture_diningRoom_stubovi = new BABYLON.Texture("assets/textures/diningRoom_stubovi.jpg", scene);
                let diffuseTexture_dinningRoom_wall = new BABYLON.Texture("assets/textures/dinningRoom_wall.jpg", scene);
                let diffuseTexture_diningRoom_redWall = new BABYLON.Texture("assets/textures/diningRoom_redWall.jpg", scene);
                let diffuseTexture_table = new BABYLON.Texture("assets/textures/table.jpg", scene);
                let diffuseTexture_seat = new BABYLON.Texture("assets/textures/seat.jpg", scene);
                let diffuseTexture_kitchen_cabinets = new BABYLON.Texture("assets/textures/kitchen_cabiinets.jpg", scene);
                let diffuseTexture_kitchen_walls = new BABYLON.Texture("assets/textures/kitchen_walls.jpg", scene);
                let diffuseTexture_dinningRoom_stairsBase = new BABYLON.Texture("assets/textures/dinningRoom_stairsBase.jpg", scene);
                let diffuseTexture_kitchen_tv = new BABYLON.Texture("assets/textures/kitchen_tv.jpg", scene);
                let diffuseTexture_cabinetjedan = new BABYLON.Texture("assets/textures/cabinetjedan.jpg", scene);
                let diffuseTexture_cabinetdva = new BABYLON.Texture("assets/textures/cabinetdva.jpg", scene);
                let diffuseTexture_kitchen_backsplash = new BABYLON.Texture("assets/textures/kitchen_backsplash.jpg", scene);
                let diffuseTexture_cabinetdole = new BABYLON.Texture("assets/textures/cabinetdole.jpg", scene);
                let diffuseTexture_kitchen_cooktopBase = new BABYLON.Texture("assets/textures/kitchen_cooktopBase.jpg", scene);
                let diffuseTexture_kitchen_doorHandle = new BABYLON.Texture("assets/textures/kitchen_doorHandle.jpg", scene);
                let diffuseTexture_kitchen_doorHandle2 = new BABYLON.Texture("assets/textures/kitchen_doorHandle2.jpg", scene);
                let diffuseTexture_kitchen_fridgeDoor = new BABYLON.Texture("assets/textures/kitchen_fridgeDoor.jpg", scene);
                let diffuseTexture_kitchen_oven = new BABYLON.Texture("assets/textures/kitchen_oven.jpg", scene);
                let diffuseTexture_kitchen_glassTableLegs = new BABYLON.Texture("assets/textures/kitchen_glassTableLegs.jpg", scene);
                let diffuseTexture_kitchen_islandCountertop1 = new BABYLON.Texture("assets/textures/kitchen_islandCountertopBlack.jpg", scene);
                let diffuseTexture_kitchen_islandCountertop2 = new BABYLON.Texture("assets/textures/kitchen_islandCountertopWhite.jpg", scene);
                let diffuseTexture_dishwasher = new BABYLON.Texture("assets/textures/dishwasher.jpg", scene);         
                let diffuseTexture_kitchen_sink = new BABYLON.Texture("assets/textures/kitchen_sink.jpg", scene);
                let diffuseTexture_kitchen_napa1_base = new BABYLON.Texture("assets/textures/kitchen_napa1_base.jpg", scene);  
                let diffuseTexture_kitchen_napa2_base = new BABYLON.Texture("assets/textures/kitchen_napa2_base.jpg", scene); 
                let diffuseTexture_kitchen_napa3_base = new BABYLON.Texture("assets/textures/kitchen_napa3_base.jpg", scene);       
                let diffuseTexture_tepihjedan = new BABYLON.Texture("assets/textures/tepihjedan.jpg", scene);
                let diffuseTexture_tepihdva = new BABYLON.Texture("assets/textures/tepihdva.jpg", scene);             
                let diffuseTexture_painting = new BABYLON.Texture("assets/textures/painting.jpg", scene);
                let diffuseTexture_painting2 = new BABYLON.Texture("assets/textures/painting2.jpg", scene);


                //islands
                let diffuseTexture_template = new BABYLON.Texture("assets/textures/islands/scene1/kitchen_island_template.jpg");

                  
                //********scene2 ***********/
                let diffuseTexture_scene2_diningRoom_redWall = new BABYLON.Texture("assets/textures/diningRoom_redWall_scene2.jpg", scene);
                let diffuseTexture_scene2_diningRoom_stubovi = new BABYLON.Texture("assets/textures/diningRoom_stubovi_scene2.jpg", scene);
                let diffuseTexture_scene2_kitchen_cabinets = new BABYLON.Texture("assets/textures/kitchen_cabiinets_scene2.jpg", scene);
                let diffuseTexture_scene2_kitchen_drawer = new BABYLON.Texture("assets/textures/kitchen_drawer_scene2.jpg", scene);
                let diffuseTexture_scene2_kitchen_editableShelf01 = new BABYLON.Texture("assets/textures/kitchen_editableShelf02.jpg", scene);
                let diffuseTexture_scene2_kitchen_editableShelf02 = new BABYLON.Texture("assets/textures/kitchen_editableShelf01.jpg", scene);              
                let diffuseTexture_scene2_kitchen_islandCountertop1 = new BABYLON.Texture("assets/textures/kitchen_islandCountertopBlack_scene2.jpg", scene);
                let diffuseTexture_scene2_kitchen_islandCountertop2 = new BABYLON.Texture("assets/textures/kitchen_islandCountertopWhite_scene2.jpg", scene);
                let diffuseTexture_scene2_kitchen_tv = new BABYLON.Texture("assets/textures/kitchen_tv_scene2.jpg", scene);
                let diffuseTexture_scene2_kitchen_walls = new BABYLON.Texture("assets/textures/kitchen_walls_scene2.jpg", scene);
                let diffuseTexture_scene2_mermer1 = new BABYLON.Texture("assets/textures/mermerBlack_scene2.jpg", scene);
                let diffuseTexture_scene2_mermer2 = new BABYLON.Texture("assets/textures/mermerWhite_scene2.jpg", scene);
                let diffuseTexture_scene2_miniFridge = new BABYLON.Texture("assets/textures/kitchen_miniFridge.jpg", scene);
                let diffuseTexture_scene2_microwave = new BABYLON.Texture("assets/textures/kitchen_microwave.jpg", scene);


                let diffuseTexture_template_scene2 = new BABYLON.Texture("assets/textures/islands/scene2/kitchen_island_template.jpg");

               
                let hdrMapa = new BABYLON.CubeTexture("./assets/textures/hdr/hdrMap.env", scene, 512);


                //create materials and assign textures to them

                let material_LivingRoom_Ceiling = new BABYLON.StandardMaterial("LivingRoom_CeilingMat", scene);
                    material_LivingRoom_Ceiling.diffuseTexture = diffuseTexture_LivingRoom_Ceiling;
                    material_LivingRoom_Ceiling.backFaceCulling = false;

                let material_diningRoom_Ceiling = new BABYLON.StandardMaterial("diningRoom_CeilingMat", scene);
                    material_diningRoom_Ceiling.diffuseTexture = diffuseTexture_diningRoom_Ceiling;
                    material_diningRoom_Ceiling.backFaceCulling = false;

                let material_kitchen_ceiling = new BABYLON.StandardMaterial("kitchen_ceilingMat", scene);
                    material_kitchen_ceiling.diffuseTexture = diffuseTexture_kitchen_ceiling;
                    material_kitchen_ceiling.backFaceCulling = false;

                let material_LivingRoom_Floor = new BABYLON.StandardMaterial("LivingRoom_FloorMat", scene);
                    material_LivingRoom_Floor.diffuseTexture = diffuseTexture_LivingRoom_Floor;
                    material_LivingRoom_Floor.backFaceCulling = false;

                let material_diningRoom_Floor = new BABYLON.StandardMaterial("diningRoom_FloorMat", scene);
                    material_diningRoom_Floor.diffuseColor = new BABYLON.Color3(247/255, 219/255, 179/255)
                    material_diningRoom_Floor.diffuseTexture = diffuseTexture_diningRoom_Floor;
                    material_diningRoom_Floor.backFaceCulling = false;

                let material_kitchen_floor = new BABYLON.StandardMaterial("kitchen_floorMat", scene);
                    material_kitchen_floor.diffuseColor = new BABYLON.Color3(247/255, 219/255, 179/255)
                    material_kitchen_floor.diffuseTexture = diffuseTexture_kitchen_floor;
                    material_kitchen_floor.backFaceCulling = false;

                let material_LivingRoom_Walls = new BABYLON.StandardMaterial("LivingRoom_WallsMat", scene);
                    material_LivingRoom_Walls.diffuseTexture = diffuseTexture_LivingRoom_Walls;
                    material_LivingRoom_Walls.backFaceCulling = false;

                let material_stokovi = new BABYLON.PBRMaterial("stokoviMat", scene);
                    material_stokovi.albedoColor = new BABYLON.Color3.White();
                    material_stokovi.reflectionTexture = hdrMapa;                     
                    material_stokovi.metallic = 0.78;
                    material_stokovi.roughness = 1;
                  //  material_stokovi.diffuseTexture = diffuseTexture_stokovi;
                    material_stokovi.backFaceCulling = false;

                let material_kamin = new BABYLON.StandardMaterial("kaminMat", scene);
                    material_kamin.diffuseTexture = diffuseTexture_kamin;
                    material_kamin.backFaceCulling = false;

                let material_diningRoom_stubovi = new BABYLON.StandardMaterial("diningRoom_stuboviMat", scene);
                    material_diningRoom_stubovi.diffuseTexture = diffuseTexture_diningRoom_stubovi;
                    material_diningRoom_stubovi.backFaceCulling = false;

                let material_dinningRoom_wall = new BABYLON.StandardMaterial("dinningRoom_wallMat", scene);
                    material_dinningRoom_wall.diffuseTexture = diffuseTexture_dinningRoom_wall;
                    material_dinningRoom_wall.backFaceCulling = false;

                let material_diningRoom_redWall = new BABYLON.StandardMaterial("diningRoom_redWallMat", scene);
                    material_diningRoom_redWall.diffuseTexture = diffuseTexture_diningRoom_redWall;
                    material_diningRoom_redWall.backFaceCulling = false;

                let material_table = new BABYLON.StandardMaterial("tableMat", scene);
                    material_table.diffuseTexture = diffuseTexture_table;
                    material_table.backFaceCulling = false;

                let material_seat = new BABYLON.StandardMaterial("seatMat", scene);
                    material_seat.diffuseTexture = diffuseTexture_seat;
                    material_seat.backFaceCulling = false;

                let material_kitchen_cabinets = new BABYLON.StandardMaterial("kitchen_cabinetsMat", scene);
                    material_kitchen_cabinets.diffuseTexture = diffuseTexture_kitchen_cabinets;
                    material_kitchen_cabinets.backFaceCulling = false;

                let material_kitchen_walls = new BABYLON.StandardMaterial("kitchen_wallsMat", scene);
                    material_kitchen_walls.diffuseTexture = diffuseTexture_kitchen_walls;
                    material_kitchen_walls.backFaceCulling = false;

                let material_dinningRoom_stairsBase = new BABYLON.StandardMaterial("dinningRoom_stairsBaseMat", scene);
                    material_dinningRoom_stairsBase.diffuseTexture = diffuseTexture_dinningRoom_stairsBase;
                    material_dinningRoom_stairsBase.backFaceCulling = false;

                let material_kitchen_tv = new BABYLON.StandardMaterial("kitchen_tvMat", scene);
                    material_kitchen_tv.diffuseTexture = diffuseTexture_kitchen_tv;
                    material_kitchen_tv.backFaceCulling = false;

                let material_cabinetjedan = new BABYLON.StandardMaterial("cabinetjedanMat", scene);
                    material_cabinetjedan.diffuseTexture = diffuseTexture_cabinetjedan;
                    material_cabinetjedan.backFaceCulling = false;

                let material_cabinetdva = new BABYLON.StandardMaterial("cabinetdvaMat", scene);
                    material_cabinetdva.diffuseTexture = diffuseTexture_cabinetdva;
                    material_cabinetdva.backFaceCulling = false;

                let material_kitchen_backsplash = new BABYLON.PBRMaterial("kitchen_backsplashMat", scene);
                    material_kitchen_backsplash.albedoTexture = diffuseTexture_kitchen_backsplash;
                    material_kitchen_backsplash.reflectionTexture = hdrMapa;                     
                    material_kitchen_backsplash.metallic = 1;
                    material_kitchen_backsplash.roughness = 0.25;
                    material_kitchen_backsplash.backFaceCulling = false;

                let material_cabinetdole = new BABYLON.StandardMaterial("cabinetdoleMat", scene);
                    material_cabinetdole.diffuseTexture = diffuseTexture_cabinetdole;
                    material_cabinetdole.backFaceCulling = false;

                let material_kitchen_cooktopBase = new BABYLON.PBRMaterial("kitchen_cooktopBaseMat", scene);
                    material_kitchen_cooktopBase.albedoTexture = diffuseTexture_kitchen_cooktopBase;
                    material_kitchen_cooktopBase.reflectionTexture = hdrMapa;                     
                    material_kitchen_cooktopBase.metallic = 1;
                    material_kitchen_cooktopBase.roughness = 0.5;
                    material_kitchen_cooktopBase.backFaceCulling = false;

                let material_kitchen_doorHandle = new BABYLON.StandardMaterial("kitchen_doorHandleMat", scene);
                    material_kitchen_doorHandle.diffuseTexture = diffuseTexture_kitchen_doorHandle;
                    material_kitchen_doorHandle.backFaceCulling = false;

                let material_kitchen_doorHandle2 = new BABYLON.StandardMaterial("kitchen_doorHandleMat2", scene);
                    material_kitchen_doorHandle2.diffuseTexture = diffuseTexture_kitchen_doorHandle2;
                    material_kitchen_doorHandle2.backFaceCulling = false;

                let material_kitchen_fridgeDoor = new BABYLON.PBRMaterial("kitchen_fridgeDoorMat", scene);
                    material_kitchen_fridgeDoor.albedoTexture = diffuseTexture_kitchen_fridgeDoor;
                    material_kitchen_fridgeDoor.reflectionTexture = hdrMapa;                     
                    material_kitchen_fridgeDoor.metallic = 1;
                    material_kitchen_fridgeDoor.roughness = 0.3;
                    material_kitchen_fridgeDoor.backFaceCulling = false;

                let material_kitchen_oven = new BABYLON.PBRMaterial("kitchen_ovenMat", scene);
                    material_kitchen_oven.albedoTexture = diffuseTexture_kitchen_oven;
                    material_kitchen_oven.backFaceCulling = false;
                    material_kitchen_oven.reflectionTexture = hdrMapa;                     
                    material_kitchen_oven.metallic = 1;
                    material_kitchen_oven.roughness = 0.2;

                let material_kitchen_glassTableLegs = new BABYLON.StandardMaterial("kitchen_glassTableLegsMat", scene);
                    material_kitchen_glassTableLegs.diffuseTexture = diffuseTexture_kitchen_glassTableLegs;
                    material_kitchen_glassTableLegs.backFaceCulling = false;

                let material_kitchen_islandCountertop = new BABYLON.PBRMaterial("kitchen_islandCountertopMat", scene);
                    material_kitchen_islandCountertop.albedoTexture = diffuseTexture_kitchen_islandCountertop1;
                    material_kitchen_islandCountertop.reflectionTexture = hdrMapa;                     
                    material_kitchen_islandCountertop.metallic = 1;
                    material_kitchen_islandCountertop.roughness = 0.27;
                    material_kitchen_islandCountertop.backFaceCulling = false;

                let material_dishwasher = new BABYLON.StandardMaterial("dishwasherMat", scene);
                    material_dishwasher.diffuseTexture = diffuseTexture_dishwasher;
                    material_dishwasher.backFaceCulling = false;
             
                let material_kitchen_island = new BABYLON.StandardMaterial("kitchen_islandMat", scene);
                    material_kitchen_island.diffuseColor = whiteCreamColor;
                    material_kitchen_island.diffuseTexture = diffuseTexture_template;
                    material_kitchen_island.backFaceCulling = false;              

                let material_kitchen_sink = new BABYLON.PBRMaterial("kitchen_sinkMat", scene);
                    material_kitchen_sink.albedoTexture = diffuseTexture_kitchen_sink;
                    material_kitchen_sink.reflectionTexture = hdrMapa;
                    material_kitchen_sink.metallic = 1;
                    material_kitchen_sink.roughness = 0.3;                     
                    material_kitchen_sink.backFaceCulling = false;

                let material_kitchen_napa1_base = new BABYLON.StandardMaterial("kitchen_napa1_baseMat", scene);
                    material_kitchen_napa1_base.diffuseTexture = diffuseTexture_kitchen_napa1_base;
                    material_kitchen_napa1_base.backFaceCulling = false;
                
                let material_kitchen_napa2_base = new BABYLON.StandardMaterial("kitchen_napa2_baseMat", scene);
                    material_kitchen_napa2_base.diffuseTexture = diffuseTexture_kitchen_napa2_base;
                    material_kitchen_napa2_base.backFaceCulling = false;
              
                let material_kitchen_napa3_base = new BABYLON.StandardMaterial("kitchen_napa3_baseMat", scene);
                    material_kitchen_napa3_base.diffuseTexture = diffuseTexture_kitchen_napa3_base;
                    material_kitchen_napa3_base.backFaceCulling = false;

                let material_tepihjedan = new BABYLON.StandardMaterial("tepihjedanMat", scene);
                    material_tepihjedan.diffuseTexture = diffuseTexture_tepihjedan;
                    material_tepihjedan.backFaceCulling = false;

                let material_tepihdva = new BABYLON.StandardMaterial("tepihdvaMat", scene);
                    material_tepihdva.diffuseTexture = diffuseTexture_tepihdva;
                    material_tepihdva.backFaceCulling = false;
            
                                 

                let blackMaterial = new BABYLON.PBRMaterial("blackMaterial", scene);
                    blackMaterial.albedoColor = new BABYLON.Color3.Black();
                    blackMaterial.reflectionTexture = hdrMapa;                     
                    blackMaterial.metallic = 1;
                    blackMaterial.roughness = 0.3;
                    blackMaterial.backFaceCulling = false;

                let glassTableMaterial = new BABYLON.PBRMaterial("glassTableMaterial", scene);
                    glassTableMaterial.albedoColor = new BABYLON.Color3(0.7,0.7,0.7);
                    glassTableMaterial.alpha = 0.4;
                    glassTableMaterial.reflectionTexture = hdrMapa;                     
                    glassTableMaterial.metallic = 1;
                    glassTableMaterial.roughness = 0.5;
                    glassTableMaterial.backFaceCulling = false;

                let glassMaterial = new BABYLON.PBRMaterial("glassMaterial", scene);
                    glassMaterial.albedoColor = new BABYLON.Color3(0.7,0.7,0.7);
                    glassMaterial.alpha = 0.4;
                    glassMaterial.reflectionTexture = hdrMapa;                     
                    glassMaterial.metallic = 1;
                    glassMaterial.roughness = 0.3;
                    glassMaterial.backFaceCulling = false;

                //*****************scene2*************** */
                let material_scene2_diningRoom_stubovi = new BABYLON.StandardMaterial("scene2_diningRoom_stuboviMat", scene);
                    material_scene2_diningRoom_stubovi.diffuseTexture = diffuseTexture_scene2_diningRoom_stubovi;
                    material_scene2_diningRoom_stubovi.backFaceCulling = false;

                let material_scene2_diningRoom_redWall = new BABYLON.StandardMaterial("scene2_diningRoom_redWallMat", scene);
                    material_scene2_diningRoom_redWall.diffuseTexture = diffuseTexture_scene2_diningRoom_redWall;
                    material_scene2_diningRoom_redWall.backFaceCulling = false;

                let material_scene2_kitchen_cabinets = new BABYLON.StandardMaterial("scene2_kitchen_cabinetsMat", scene);
                    material_scene2_kitchen_cabinets.diffuseTexture = diffuseTexture_scene2_kitchen_cabinets;
                    material_scene2_kitchen_cabinets.backFaceCulling = false;

                let material_scene2_kitchen_drawer = new BABYLON.StandardMaterial("scene2_kitchen_drawerMat", scene);
                    material_scene2_kitchen_drawer.diffuseColor = whiteCreamColor; 
                    material_scene2_kitchen_drawer.diffuseTexture = diffuseTexture_scene2_kitchen_drawer;
                    material_scene2_kitchen_drawer.backFaceCulling = false;

                   
                
                let material_kitchen_island_scene2 = new BABYLON.StandardMaterial("kitchen_islandMat_scene2", scene);
                    material_kitchen_island_scene2.diffuseColor = whiteCreamColor;
                    material_kitchen_island_scene2.diffuseTexture = diffuseTexture_template_scene2;
                    material_kitchen_island_scene2.backFaceCulling = false;
               

                let material_scene2_kitchen_islandCountertop = new BABYLON.PBRMaterial("scene2_kitchen_islandCountertopMat", scene);
                    material_scene2_kitchen_islandCountertop.albedoTexture = diffuseTexture_scene2_kitchen_islandCountertop1;
                    material_scene2_kitchen_islandCountertop.reflectionTexture = hdrMapa;                     
                    material_scene2_kitchen_islandCountertop.metallic = 1;
                    material_scene2_kitchen_islandCountertop.roughness = 0.35;
                    material_scene2_kitchen_islandCountertop.backFaceCulling = false;

                let material_scene2_kitchen_walls = new BABYLON.StandardMaterial("scene2_kitchen_wallsMat", scene);
                    material_scene2_kitchen_walls.diffuseTexture = diffuseTexture_scene2_kitchen_walls;
                    material_scene2_kitchen_walls.backFaceCulling = false;

                let material_scene2_kitchen_tv = new BABYLON.StandardMaterial("scene2_kitchen_tvMat", scene);
                    material_scene2_kitchen_tv.diffuseTexture = diffuseTexture_scene2_kitchen_tv;
                    material_scene2_kitchen_tv.backFaceCulling = false;

                let material_scene2_editableShelf01 = new BABYLON.StandardMaterial("scene2_kitchen_editableShelf01", scene);
                    material_scene2_editableShelf01.diffuseTexture = diffuseTexture_scene2_kitchen_editableShelf01;
                    material_scene2_editableShelf01.backFaceCulling = false;

                let material_scene2_editableShelf02 = new BABYLON.StandardMaterial("scene2_kitchen_editableShelf02", scene);
                    material_scene2_editableShelf02.diffuseTexture = diffuseTexture_scene2_kitchen_editableShelf02;
                    material_scene2_editableShelf02.backFaceCulling = false;

                let material_scene2_mermer = new BABYLON.PBRMaterial("scene2_kitchen_mermer", scene);
                    material_scene2_mermer.albedoTexture = diffuseTexture_scene2_mermer1;
                    material_scene2_mermer.reflectionTexture = hdrMapa;                     
                    material_scene2_mermer.metallic = 1;
                    material_scene2_mermer.roughness = 0.3;
                    material_scene2_mermer.backFaceCulling = false;

                let material_painting = new BABYLON.StandardMaterial("paintingMaterial", scene);
                    material_painting.diffuseTexture = diffuseTexture_painting;
                    material_painting.backFaceCulling = false;

                let material_painting2 = new BABYLON.StandardMaterial("paintingMaterial2", scene);                  
                    material_painting2.diffuseTexture = diffuseTexture_painting2;
                    material_painting2.backFaceCulling = false;
               
                let material_paintingFrame = new BABYLON.PBRMaterial("paintingFrameMaterial", scene);
                    material_paintingFrame.albedoColor = new BABYLON.Color3(92/255,20/255, 22/255);
                    material_paintingFrame.reflectionTexture = hdrMapa;
                    material_paintingFrame.metallic = 1;
                    material_paintingFrame.roughness = 0.64;
                    material_paintingFrame.backFaceCulling = false;

                let material_paintingFrame2 = new BABYLON.PBRMaterial("paintingFrameMaterial2", scene);
                    material_paintingFrame2.albedoColor = new BABYLON.Color3(230/255, 186/255, 153/255);
                    material_paintingFrame2.reflectionTexture = hdrMapa;
                    material_paintingFrame2.metallic = 1;
                    material_paintingFrame2.roughness = 0.64;
                    material_paintingFrame2.backFaceCulling = false;

                let material_scene2_miniFridge = new BABYLON.PBRMaterial("miniFridgeMat", scene);
                    material_scene2_miniFridge.albedoTexture = diffuseTexture_scene2_miniFridge;
                    material_scene2_miniFridge.reflectionTexture = hdrMapa;                     
                    material_scene2_miniFridge.metallic = 1;
                    material_scene2_miniFridge.roughness = 0.6;
                    material_scene2_miniFridge.backFaceCulling = false;
                
                let material_scene2_microwave = new BABYLON.PBRMaterial("microwaveMat", scene);
                    material_scene2_microwave.albedoTexture = diffuseTexture_scene2_microwave;
                    material_scene2_microwave.reflectionTexture = hdrMapa;
                    material_scene2_microwave.metallic = 1;
                    material_scene2_microwave.roughness = 0.6;
                    material_scene2_microwave.backFaceCulling = false;


                //reference meshes and assign materials to them
                let LivingRoom_Ceiling = scene.getMeshByName("LivingRoom_Ceiling");
                    LivingRoom_Ceiling.material = material_LivingRoom_Ceiling;

                let diningRoom_Ceiling = scene.getMeshByName("diningRoom_Ceiling");
                    diningRoom_Ceiling.material = material_diningRoom_Ceiling;

                let kitchen_ceiling = scene.getMeshByName("kitchen_ceiling");
                    kitchen_ceiling.material = material_kitchen_ceiling;

                let LivingRoom_Floor = scene.getMeshByName("LivingRoom_Floor")
                    LivingRoom_Floor.material = material_LivingRoom_Floor;

                let diningRoom_Floor = scene.getMeshByName("diningRoom_Floor");
                    diningRoom_Floor.material = material_diningRoom_Floor;

                let kitchen_floor = scene.getMeshByName("kitchen_floor");
                    kitchen_floor.material = material_kitchen_floor;

                let LivingRoom_Walls = scene.getMeshByName("LivingRoom_Walls");
                    LivingRoom_Walls.material = material_LivingRoom_Walls;

                let stokovi = scene.getMeshByName("stokovi");
                    stokovi.material = material_stokovi;

                let kamin = scene.getMeshByName("kamin");
                    kamin.material = material_kamin;

                let diningRoom_stubovi = scene.getMeshByName("scene1_diningRoom_stubovi");
                    diningRoom_stubovi.material = material_diningRoom_stubovi;

                let dinningRoom_wall = scene.getMeshByName("dinningRoom_wall");
                    dinningRoom_wall.material = material_dinningRoom_wall;

                let diningRoom_redWall = scene.getMeshByName("scene1_diningRoom_redWall");
                    diningRoom_redWall.material = material_diningRoom_redWall;

                let table = scene.getMeshByName("table");
                    table.material = material_table;

                let seat = scene.getMeshByName("seat");
                    seat.material = material_seat;

                let kitchen_cabinets = scene.getMeshByName("scene1_kitchen_cabiinets");
                    kitchen_cabinets.material = material_kitchen_cabinets;                   

                let kitchen_walls = scene.getMeshByName("scene1_kitchen_walls");
                    kitchen_walls.material = material_kitchen_walls;                   

                let dinningRoom_stairsBase = scene.getMeshByName("dinningRoom_stairsBase");
                    dinningRoom_stairsBase.material = material_dinningRoom_stairsBase;

                let kitchen_tv = scene.getMeshByName("scene1_kitchen_tv");
                    kitchen_tv.material = material_kitchen_tv;      

                let cabinetjedan = scene.getMeshByName("cabinetjedan");
                    cabinetjedan.material = material_cabinetjedan;

                let cabinetdva = scene.getMeshByName("cabinetdva");
                    cabinetdva.material = material_cabinetdva;

                let kitchen_backsplash = scene.getMeshByName("kitchen_backsplash");
                    kitchen_backsplash.material = material_kitchen_backsplash;

                let cabinetdole = scene.getMeshByName("cabinetdole");
                    cabinetdole.material = material_cabinetdole;

                let kitchen_cooktopBase = scene.getMeshByName("kitchen_cooktopBase");
                    kitchen_cooktopBase.material = material_kitchen_cooktopBase;

                let kitchen_doorHandle = scene.getMeshByName("scene1_kitchen_doorHandle");
                    kitchen_doorHandle.material = material_kitchen_doorHandle;
                
                let kitchen_doorHandle_scene2 = scene.getMeshByName("scene2_kitchen_doorHandle");
                    kitchen_doorHandle_scene2.material = material_kitchen_doorHandle2;

                let kitchen_fridgeDoor = scene.getMeshByName("kitchen_fridgeDoor");
                    kitchen_fridgeDoor.material = material_kitchen_fridgeDoor;

                let kitchen_oven = scene.getMeshByName("scene1_kitchen_oven");
                    kitchen_oven.material = material_kitchen_oven;                   

                let kitchen_ovenGlass = scene.getMeshByName("scene1_kitchen_ovenGlass");
                    kitchen_ovenGlass.material = blackMaterial;

                let kitchen_glassTableLegs = scene.getMeshByName("kitchen_glassTableLegs");
                    kitchen_glassTableLegs.material = material_kitchen_glassTableLegs;

                let kitchen_islandCountertop = scene.getMeshByName("scene1_kitchen_islandCountertop");
                    kitchen_islandCountertop.material = material_kitchen_islandCountertop;                   

                let dishwasher = scene.getMeshByName("dishwasher");
                    dishwasher.material = material_dishwasher;

                let kitchen_island = scene.getMeshByName("scene1_kitchen_island");
                    kitchen_island.material = material_kitchen_island;
                  
                let kitchen_sink = scene.getMeshByName("kitchen_sink");
                    kitchen_sink.material = material_kitchen_sink;

                let kitchen_napa1_base = scene.getMeshByName("kitchen_napa1_base");
                    kitchen_napa1_base.material = material_kitchen_napa1_base;
                    kitchen_napa1_base.isVisible = true;
                    
                let kitchen_napa2_base = scene.getMeshByName("kitchen_napa2_base");
                    kitchen_napa2_base.material = material_kitchen_napa2_base;
                    kitchen_napa2_base.isVisible = false;

                let kitchen_napa3_base = scene.getMeshByName("kitchen_napa3_base");
                    kitchen_napa3_base.material = material_kitchen_napa3_base;
                    kitchen_napa3_base.isVisible = false;

                let tepihjedan = scene.getMeshByName("tepihjedan");
                    tepihjedan.material = material_tepihjedan;

                let tepihdva = scene.getMeshByName("tepihdva");
                    tepihdva.material = material_tepihdva;

        

                let blackMesh = scene.getMeshByName("scene1_blackMat");
                    blackMesh.material = blackMaterial;   

                let glassTableMesh = scene.getMeshByName("kitchen_glassTableTop");
                    glassTableMesh.material = glassTableMaterial;

                let glassMesh = scene.getMeshByName("glass");
                    glassMesh.material = glassMaterial;

                let paintingMesh = scene.getMeshByName("kitchen_painting");
                    paintingMesh.material = material_painting;

                let paintingFrameMesh = scene.getMeshByName("kitchen_paintingFrame");
                    paintingFrameMesh.material = material_paintingFrame;

                let paintingMesh2 = scene.getMeshByName("kitchen_painting2");
                    paintingMesh2.position.x = -164;
                    paintingMesh2.position.z = -235;
                    paintingMesh2.material = material_painting2;

                let paintingFrameMesh2 = scene.getMeshByName("kitchen_paintingFrame2");
                    paintingFrameMesh2.position.x = -164;
                    paintingFrameMesh2.position.z = -235;
                    paintingFrameMesh2.material = material_paintingFrame2

                /************scene2******** */
             
                let scene2_diningRoom_redWallMesh = scene.getMeshByName("scene2_diningRoom_redWall");
                    scene2_diningRoom_redWallMesh.material = material_scene2_diningRoom_redWall;
                
                let scene2_diningRoom_stuboviMesh = scene.getMeshByName("scene2_diningRoom_stubovi");
                    scene2_diningRoom_stuboviMesh.material = material_scene2_diningRoom_stubovi;

                let scene2_kitchen_cabinetsMesh = scene.getMeshByName("scene2_kitchen_cabiinets");
                    scene2_kitchen_cabinetsMesh.material = material_scene2_kitchen_cabinets;

                let scene2_kitchen_drawerMesh = scene.getMeshByName("scene2_kitchen_drawer");
                    scene2_kitchen_drawerMesh.material = material_scene2_kitchen_drawer;

                let scene2_kitchen_editableShelf01Mesh = scene.getMeshByName("scene2_kitchen_editableShelf01");
                    scene2_kitchen_editableShelf01Mesh.position.z += 12;
                    scene2_kitchen_editableShelf01Mesh.scaling.z = 1.279;
                    scene2_kitchen_editableShelf01Mesh.material = material_scene2_editableShelf01;

                let scene2_kitchen_editableShelf02Mesh = scene.getMeshByName("scene2_kitchen_editableShelf02");
                    scene2_kitchen_editableShelf02Mesh.material = material_scene2_editableShelf02;
            
                let scene2_kitchen_islandMesh = scene.getMeshByName("scene2_kitchen_island");
                    scene2_kitchen_islandMesh.material = material_kitchen_island_scene2;

                let scene2_kitchen_islandCountertopMesh = scene.getMeshByName("scene2_kitchen_islandCountertop");
                    scene2_kitchen_islandCountertopMesh.material = material_scene2_kitchen_islandCountertop;

                let scene2_kitchen_ovenMesh = scene.getMeshByName("scene2_kitchen_oven");
                    scene2_kitchen_ovenMesh.material = material_kitchen_oven;

                let scene2_kitchen_tvMesh = scene.getMeshByName("scene2_kitchen_tv");
                    scene2_kitchen_tvMesh.position.x -= 1;
                    scene2_kitchen_tvMesh.material = material_scene2_kitchen_tv;
                    

                let scene2_kitchen_wallsMesh = scene.getMeshByName("scene2_kitchen_walls");
                    scene2_kitchen_wallsMesh.material = material_scene2_kitchen_walls;

                let scene2_mermer = scene.getMeshByName("scene2_mermer");
                    scene2_mermer.material = material_scene2_mermer;

                let scene2_miniFridge = scene.getMeshByName("scene2_kitchen_miniFridge");
                    scene2_miniFridge.material = material_scene2_miniFridge;

                let scene2_microwaveGlass = scene.getMeshByName("scene2_kitchen_microwaveGlass");
                    scene2_microwaveGlass.material = blackMaterial;

                let scene2_microwave = scene.getMeshByName("scene2_kitchen_microwaveBase");
                    scene2_microwave.material = material_scene2_microwave;
             
                




        for (let i = 0; i < scene.meshes.length; i++) {
            const meshes = scene.meshes[i];
            meshes.checkCollisions = true;           
            meshes.freezeWorldMatrix();
        }    

        for (let i = 0; i < scene.meshes.length; i++) {
            if(scene.meshes[i].name.toLowerCase().includes("scene2")) {
                scene.meshes[i].isVisible = false;               
            }
        }   
        
        for (let i = 0; i < scene.meshes.length; i++) {
            if(scene.meshes[i].name.toLowerCase().includes("collision")) {
                scene.meshes[i].isVisible = false;               
            }
        }   

     
            


        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            scene.activeCamera = VJC;
            VJC.attachControl(canvas, true);
        } else {            
            scene.activeCamera = camera;
            camera.attachControl(canvas, true);
        }

        islandFunc(material_kitchen_island, material_kitchen_island_scene2, material_scene2_kitchen_drawer);
        countertopFunc(material_kitchen_islandCountertop, diffuseTexture_kitchen_islandCountertop1, diffuseTexture_kitchen_islandCountertop2, material_scene2_kitchen_islandCountertop, diffuseTexture_scene2_kitchen_islandCountertop1, diffuseTexture_scene2_kitchen_islandCountertop2, material_scene2_mermer,diffuseTexture_scene2_mermer1, diffuseTexture_scene2_mermer2);
        rangehoodFunc(kitchen_napa1_base, kitchen_napa2_base, kitchen_napa3_base);
        ovenAdjustFunc(kitchen_oven, kitchen_ovenGlass, scene2_kitchen_ovenMesh);
        sceneSelectionFunc(scene,paintingMesh2, paintingFrameMesh2);
        checkboxFunc(scene2_kitchen_editableShelf01Mesh, scene2_kitchen_editableShelf02Mesh);
        toggleUI();

     /*

        document.addEventListener("fullscreenchange", onFullScreenChange, false);
        document.addEventListener("mozfullscreenchange", onFullScreenChange, false);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
        document.addEventListener("msfullscreenchange", onFullScreenChange, false);
    
        fsbtn.addEventListener('click', switchFullscreen);

        */
        //run engine loop
        engine.runRenderLoop(function () {            
            scene.render();
        });
        //add event listener for correct resizing
        window.addEventListener('resize', function () {
            engine.resize();
        });

        window.addEventListener("orientationchange", function() {
            engine.resize();
          });
    });
};




function ovenAdjustFunc(oven, ovenGlass, oven_scene2){
    oven.unfreezeWorldMatrix();
    ovenGlass.unfreezeWorldMatrix();
    oven_scene2.unfreezeWorldMatrix();

    let currentY_oven = oven.position.y; 
    let currentY_ovenGlass = ovenGlass.position.y; 
    let currentY_oven_scene2 = oven_scene2.position.y;
    
    rangeSlider.oninput = function() {       

         oven.position.y = currentY_oven + (rangeSlider.value-4)*2*2.54; 
         ovenGlass.position.y = currentY_ovenGlass + (rangeSlider.value-4)*2*2.54; 
         oven_scene2.position.y = currentY_oven_scene2 + (rangeSlider.value-4)*2*2.54; 
        
      }  
};

function islandFunc(island, island_scene2, drawer) {
   
  
    whiteCream.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");  
        island.diffuseColor = whiteCreamColor;
        island_scene2.diffuseColor = whiteCreamColor;  
        drawer.diffuseColor = whiteCreamColor;
        })
    
    
    pumpkinCream.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = pumpkinCreamColor;
        island_scene2.diffuseColor = pumpkinCreamColor;
        drawer.diffuseColor = pumpkinCreamColor;
    })
    
    egyptianPyramid.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = egyptianPyramidColor;
        island_scene2.diffuseColor = egyptianPyramidColor;  
        drawer.diffuseColor = egyptianPyramidColor;     
    })
    
    sugarMaple.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = sugarMapleColor;
        island_scene2.diffuseColor = sugarMapleColor;
        drawer.diffuseColor = sugarMapleColor;
    })
    
    speedboat.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = speedboatColor;
        island_scene2.diffuseColor = speedboatColor;        
        drawer.diffuseColor = speedboatColor;    
    })
    
    yachtBlue.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = yachtBlueColor;
        island_scene2.diffuseColor = yachtBlueColor;  
        drawer.diffuseColor = yachtBlueColor;        
    })
    
    jayBird.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = jayBirdColor;
        island_scene2.diffuseColor = jayBirdColor;       
        drawer.diffuseColor = jayBirdColor;   
    })
    
    venusTeal.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = venusTealColor;
        island_scene2.diffuseColor = venusTealColor;     
        drawer.diffuseColor = venusTealColor;  
    })
    
    dragonfly.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = dragonflyColor;
        island_scene2.diffuseColor =  dragonflyColor;   
        drawer.diffuseColor =  dragonflyColor;     
    })
    
    pineBrook.addEventListener('click', function(){
        for (let i = 0; i < islandItems.length; i++) {
            islandItems[i].classList.remove("islandMenuItemSelected");        
        }
        this.classList.add("islandMenuItemSelected");
        island.diffuseColor = pineBrookColor;
        island_scene2.diffuseColor = pineBrookColor;     
        drawer.diffuseColor = pineBrookColor;      
    })
}

function countertopFunc(countertop, texture1, texture2, countertop_scene2, texture1_scene2, texture2_scene2, drawerCountertop_scene2, drawerTexture1_scene2, drawerTexture2_scene2){

   
    blackLimeMaterial.addEventListener("click", function(){

        for (let i = 0; i < countertopItems.length; i++) {
            countertopItems[i].classList.remove("materialMenuItemSelected");        
        }
        this.classList.add("materialMenuItemSelected");
        countertop.albedoTexture = texture1;
        countertop_scene2.albedoTexture = texture1_scene2;

        drawerCountertop_scene2.albedoTexture = drawerTexture1_scene2;
    
    })
    
    whiteLimeMaterial.addEventListener("click", function(){
    
        for (let i = 0; i < countertopItems.length; i++) {
            countertopItems[i].classList.remove("materialMenuItemSelected");        
        }
        this.classList.add("materialMenuItemSelected");
        countertop.albedoTexture = texture2;   
        countertop_scene2.albedoTexture = texture2_scene2;

        drawerCountertop_scene2.albedoTexture = drawerTexture2_scene2;
    })
}

function rangehoodFunc(napa1_mesh, napa2_mesh, napa3_mesh){
    
napa1.addEventListener('click', function(){
    for (let i = 0; i < rangehoodItems.length; i++) {
        rangehoodItems[i].classList.remove("rangehoodMenuItemSelected");        
    }
    this.classList.add("rangehoodMenuItemSelected");
    napa1_mesh.isVisible = true;
    napa2_mesh.isVisible = false;
    napa3_mesh.isVisible = false;
})
napa2.addEventListener('click', function(){
    for (let i = 0; i < rangehoodItems.length; i++) {
        rangehoodItems[i].classList.remove("rangehoodMenuItemSelected");        
    }
    this.classList.add("rangehoodMenuItemSelected");
    napa1_mesh.isVisible = false;
    napa2_mesh.isVisible = true;
    napa3_mesh.isVisible = false;
})
napa3.addEventListener('click', function(){
    for (let i = 0; i < rangehoodItems.length; i++) {
        rangehoodItems[i].classList.remove("rangehoodMenuItemSelected");        
    }
    this.classList.add("rangehoodMenuItemSelected");
    napa1_mesh.isVisible = false;
    napa2_mesh.isVisible = false;
    napa3_mesh.isVisible = true;
})


}



islandSelection.addEventListener('click', function(){ 
   
   
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("menu_selection_activeSelection")        
    }

    for (let i = 0; i < menus.length; i++) {
        menus[i].style.display = "none"; 
    }

    this.classList.add("menu_selection_activeSelection");
    islandMenu.style.display = "flex";
})

islandCountertopSelection.addEventListener('click', function(){   
   
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("menu_selection_activeSelection")        
    } 

    for (let i = 0; i < menus.length; i++) {
        menus[i].style.display = "none"; 
    }

    this.classList.add("menu_selection_activeSelection");
    islandCountertopMenu.style.display = "flex";
})

rangehoodSelection.addEventListener('click', function(){   
 
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("menu_selection_activeSelection")        
    }

    for (let i = 0; i < menus.length; i++) {
        menus[i].style.display = "none"; 
    }

    this.classList.add("menu_selection_activeSelection");
    rangehoodMenu.style.display = "flex";
})

function sceneSelectionFunc(scene, painting, paintingFrame){
    painting.unfreezeWorldMatrix();
    paintingFrame.unfreezeWorldMatrix();

    

    scene1Selection.addEventListener("click", function(){
        canvas.style.display = "block";
        iframeScene.style.display = "none";
        for (let i = 0; i < sceneItems.length; i++) {
            sceneItems[i].classList.remove("menu_scene_activeSelection");        
        }
        this.classList.add("menu_scene_activeSelection");
        switcherContainer.style.pointerEvents = "none";
        switcherContainer.style.opacity = 0.2;
        painting.position.x = -164;
        painting.position.z = -235;
        paintingFrame.position.x = -164;
        paintingFrame.position.z = -235;
      
        for (let i = 0; i < scene.meshes.length; i++) {
            if(scene.meshes[i].name.toLowerCase().includes("scene1")) {
                scene.meshes[i].isVisible = true;              
            }
        }    

        for (let i = 0; i < scene.meshes.length; i++) {
            if(scene.meshes[i].name.toLowerCase().includes("scene2")) {
                scene.meshes[i].isVisible = false;
            }
        }

        for (let i = 0; i < canvases.length; i++) {       
            const element = canvases[i];
            if (!element.hasAttribute("id")) {
                element.style.display = 'block'
            }               
          
        }
       
    })
    
    scene2Selection.addEventListener("click", function(){
        canvas.style.display = "block";
        iframeScene.style.display = "none";
        for (let i = 0; i < sceneItems.length; i++) {
            sceneItems[i].classList.remove("menu_scene_activeSelection");        
        }
        this.classList.add("menu_scene_activeSelection")
        switcherContainer.style.pointerEvents = "all";
        switcherContainer.style.opacity = 1;     
        painting.position.x = -126.59;
        painting.position.z = -276.10;
        paintingFrame.position.x = -126.59;
        paintingFrame.position.z = -276.10;
  

        for (let i = 0; i < scene.meshes.length; i++) {
            if(scene.meshes[i].name.toLowerCase().includes("scene1")) {
                scene.meshes[i].isVisible = false;              
            }
        }    

        for (let i = 0; i < scene.meshes.length; i++) {
            if(scene.meshes[i].name.toLowerCase().includes("scene2")) {
                scene.meshes[i].isVisible = true;
            }
        }
        
        for (let i = 0; i < canvases.length; i++) {       
            const element = canvases[i];
            if (!element.hasAttribute("id")) {
                element.style.display = 'block'
            }               
          
        }
        
    })

    scene3Selection.addEventListener("click", function(){
        for (let i = 0; i < sceneItems.length; i++) {
            sceneItems[i].classList.remove("menu_scene_activeSelection");        
        }
        this.classList.add("menu_scene_activeSelection")
        canvas.style.display = "none";
        iframeScene.style.display = "block";

        for (let i = 0; i < canvases.length; i++) {       
            const element = canvases[i];
            if (!element.hasAttribute("id")) {
                element.style.display = 'none'
            }               
          
        }

    })
};

function checkboxFunc(shelf1, shelf2){
    checkboxButton1.oninput = function() {
        if (checkboxButton1.checked === true) {
            shelf1.isVisible = true;
            console.log("checkboxButton1 ",checkboxButton1.checked)
        }
        else {
            console.log("checkboxButton1 ",checkboxButton1.checked)
            shelf1.isVisible = false;
        }       
    }

    checkboxButton2.oninput = function() {
        if (checkboxButton2.checked === true) {
            shelf2.isVisible = true;
            console.log("checkboxButton2 ",checkboxButton2.checked)
        }
        else {
            console.log("checkboxButton2 ",checkboxButton2.checked)
            shelf2.isVisible = false;
        }
    }
}

function toggleUI(){
    uiToggleButton.addEventListener('click', function(){

        if (uiHidden === true) {
        this.style.background = "url('./assets/icons/hideUI.png')"
        this.style.backgroundSize = "contain";

        for (let i = 0; i < uiElements.length; i++) {
            uiElements[i].style.display = 'inherit'            
        }
        uiHidden = false;
      }
      else {
        this.style.background = "url('./assets/icons/showUI.png')"
        this.style.backgroundSize = "contain";
        for (let i = 0; i < uiElements.length; i++) {
            uiElements[i].style.display = 'none'            
        }
       uiHidden = true;
      }
    })
}

function MyLoadingScreen(text, ) {
    //init the loader
    this.loadingUIText = text;
  }
  MyLoadingScreen.prototype.displayLoadingUI = function() {
    customScreen.style.display = "flex";
  };
  MyLoadingScreen.prototype.hideLoadingUI = function() {
    customScreen.style.display = "none";
  };


/*

function onFullScreenChange() {
    if (document.fullscreen !== undefined) {
        isFullScreen = document.fullscreen;
    } else if (document.mozFullScreen !== undefined) {
        isFullScreen = document.mozFullScreen;
    } else if (document.webkitIsFullScreen !== undefined) {
        isFullScreen = document.webkitIsFullScreen;
    } else if (document.msIsFullScreen !== undefined) {
        isFullScreen = document.msIsFullScreen;
    }
}

function switchFullscreen(){
    if (!isFullScreen) {
        BABYLON.Tools.RequestFullscreen(renderingZone);
    }
    else {
        BABYLON.Tools.ExitFullscreen();
    }
};
*/

//call createScene function
createScene();