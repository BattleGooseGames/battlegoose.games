gdjs.Level_325Code = {};
gdjs.Level_325Code.GDmanObjects1_1final = [];

gdjs.Level_325Code.GDmanObjects1= [];
gdjs.Level_325Code.GDmanObjects2= [];
gdjs.Level_325Code.GDgroundObjects1= [];
gdjs.Level_325Code.GDgroundObjects2= [];
gdjs.Level_325Code.GDbredObjects1= [];
gdjs.Level_325Code.GDbredObjects2= [];
gdjs.Level_325Code.GDstilldroneObjects1= [];
gdjs.Level_325Code.GDstilldroneObjects2= [];
gdjs.Level_325Code.GDdrivingdroneObjects1= [];
gdjs.Level_325Code.GDdrivingdroneObjects2= [];
gdjs.Level_325Code.GDlaserObjects1= [];
gdjs.Level_325Code.GDlaserObjects2= [];
gdjs.Level_325Code.GDNewTextObjects1= [];
gdjs.Level_325Code.GDNewTextObjects2= [];

gdjs.Level_325Code.conditionTrue_0 = {val:false};
gdjs.Level_325Code.condition0IsTrue_0 = {val:false};
gdjs.Level_325Code.condition1IsTrue_0 = {val:false};
gdjs.Level_325Code.condition2IsTrue_0 = {val:false};
gdjs.Level_325Code.condition3IsTrue_0 = {val:false};
gdjs.Level_325Code.condition4IsTrue_0 = {val:false};
gdjs.Level_325Code.conditionTrue_1 = {val:false};
gdjs.Level_325Code.condition0IsTrue_1 = {val:false};
gdjs.Level_325Code.condition1IsTrue_1 = {val:false};
gdjs.Level_325Code.condition2IsTrue_1 = {val:false};
gdjs.Level_325Code.condition3IsTrue_1 = {val:false};
gdjs.Level_325Code.condition4IsTrue_1 = {val:false};


gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDmanObjects1Objects = Hashtable.newFrom({"man": gdjs.Level_325Code.GDmanObjects1});
gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDbredObjects1Objects = Hashtable.newFrom({"bred": gdjs.Level_325Code.GDbredObjects1});
gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDmanObjects1Objects = Hashtable.newFrom({"man": gdjs.Level_325Code.GDmanObjects1});
gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDlaserObjects1Objects = Hashtable.newFrom({"laser": gdjs.Level_325Code.GDlaserObjects1});
gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDmanObjects1Objects = Hashtable.newFrom({"man": gdjs.Level_325Code.GDmanObjects1});
gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDlaserObjects1Objects = Hashtable.newFrom({"laser": gdjs.Level_325Code.GDlaserObjects1});
gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDbredObjects1Objects = Hashtable.newFrom({"bred": gdjs.Level_325Code.GDbredObjects1});
gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDstilldroneObjects1Objects = Hashtable.newFrom({"stilldrone": gdjs.Level_325Code.GDstilldroneObjects1});
gdjs.Level_325Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);

gdjs.Level_325Code.condition0IsTrue_0.val = false;
gdjs.Level_325Code.condition1IsTrue_0.val = false;
gdjs.Level_325Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_325Code.GDmanObjects1.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.Level_325Code.condition0IsTrue_0.val = true;
        gdjs.Level_325Code.GDmanObjects1[k] = gdjs.Level_325Code.GDmanObjects1[i];
        ++k;
    }
}
gdjs.Level_325Code.GDmanObjects1.length = k;}if ( gdjs.Level_325Code.condition0IsTrue_0.val ) {
{
gdjs.Level_325Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "c"));
}if ( gdjs.Level_325Code.condition1IsTrue_0.val ) {
{
gdjs.Level_325Code.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl"));
}}
}
if (gdjs.Level_325Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_325Code.GDmanObjects1 */
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].flipX(true);
}
}}

}


{

gdjs.Level_325Code.GDmanObjects1.length = 0;


gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_325Code.conditionTrue_1 = gdjs.Level_325Code.condition0IsTrue_0;
gdjs.Level_325Code.GDmanObjects1_1final.length = 0;gdjs.Level_325Code.condition0IsTrue_1.val = false;
gdjs.Level_325Code.condition1IsTrue_1.val = false;
gdjs.Level_325Code.condition2IsTrue_1.val = false;
{
gdjs.Level_325Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if( gdjs.Level_325Code.condition0IsTrue_1.val ) {
    gdjs.Level_325Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_325Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if( gdjs.Level_325Code.condition1IsTrue_1.val ) {
    gdjs.Level_325Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects2);
for(var i = 0, k = 0, l = gdjs.Level_325Code.GDmanObjects2.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDmanObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.Level_325Code.condition2IsTrue_1.val = true;
        gdjs.Level_325Code.GDmanObjects2[k] = gdjs.Level_325Code.GDmanObjects2[i];
        ++k;
    }
}
gdjs.Level_325Code.GDmanObjects2.length = k;if( gdjs.Level_325Code.condition2IsTrue_1.val ) {
    gdjs.Level_325Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_325Code.GDmanObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_325Code.GDmanObjects1_1final.indexOf(gdjs.Level_325Code.GDmanObjects2[j]) === -1 )
            gdjs.Level_325Code.GDmanObjects1_1final.push(gdjs.Level_325Code.GDmanObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_325Code.GDmanObjects1_1final, gdjs.Level_325Code.GDmanObjects1);
}
}
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_325Code.GDmanObjects1 */
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].flipX(false);
}
}}

}


{


gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_325Code.conditionTrue_1 = gdjs.Level_325Code.condition0IsTrue_0;
gdjs.Level_325Code.condition0IsTrue_1.val = false;
gdjs.Level_325Code.condition1IsTrue_1.val = false;
{
gdjs.Level_325Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if( gdjs.Level_325Code.condition0IsTrue_1.val ) {
    gdjs.Level_325Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_325Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if( gdjs.Level_325Code.condition1IsTrue_1.val ) {
    gdjs.Level_325Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].setAnimationName("crouch");
}
}{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].rotateTowardAngle(90, 270, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].flipX(false);
}
}}

}


{


gdjs.Level_325Code.condition0IsTrue_0.val = false;
gdjs.Level_325Code.condition1IsTrue_0.val = false;
{
gdjs.Level_325Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "c"));
}if ( gdjs.Level_325Code.condition0IsTrue_0.val ) {
{
gdjs.Level_325Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl"));
}}
if (gdjs.Level_325Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].rotateTowardAngle(0, 90, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);

gdjs.Level_325Code.condition0IsTrue_0.val = false;
gdjs.Level_325Code.condition1IsTrue_0.val = false;
gdjs.Level_325Code.condition2IsTrue_0.val = false;
gdjs.Level_325Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_325Code.GDmanObjects1.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_325Code.condition0IsTrue_0.val = true;
        gdjs.Level_325Code.GDmanObjects1[k] = gdjs.Level_325Code.GDmanObjects1[i];
        ++k;
    }
}
gdjs.Level_325Code.GDmanObjects1.length = k;}if ( gdjs.Level_325Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_325Code.GDmanObjects1.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Level_325Code.condition1IsTrue_0.val = true;
        gdjs.Level_325Code.GDmanObjects1[k] = gdjs.Level_325Code.GDmanObjects1[i];
        ++k;
    }
}
gdjs.Level_325Code.GDmanObjects1.length = k;}if ( gdjs.Level_325Code.condition1IsTrue_0.val ) {
{
gdjs.Level_325Code.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "c"));
}if ( gdjs.Level_325Code.condition2IsTrue_0.val ) {
{
gdjs.Level_325Code.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl"));
}}
}
}
if (gdjs.Level_325Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level_325Code.GDmanObjects1 */
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);

gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_325Code.GDmanObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.Level_325Code.condition0IsTrue_0.val = true;
        gdjs.Level_325Code.GDmanObjects1[k] = gdjs.Level_325Code.GDmanObjects1[i];
        ++k;
    }
}
gdjs.Level_325Code.GDmanObjects1.length = k;}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_325Code.GDmanObjects1 */
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].setAnimationName("hop");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);

gdjs.Level_325Code.condition0IsTrue_0.val = false;
gdjs.Level_325Code.condition1IsTrue_0.val = false;
gdjs.Level_325Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_325Code.GDmanObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level_325Code.condition0IsTrue_0.val = true;
        gdjs.Level_325Code.GDmanObjects1[k] = gdjs.Level_325Code.GDmanObjects1[i];
        ++k;
    }
}
gdjs.Level_325Code.GDmanObjects1.length = k;}if ( gdjs.Level_325Code.condition0IsTrue_0.val ) {
{
gdjs.Level_325Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "c"));
}if ( gdjs.Level_325Code.condition1IsTrue_0.val ) {
{
gdjs.Level_325Code.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl"));
}}
}
if (gdjs.Level_325Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_325Code.GDmanObjects1 */
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bred"), gdjs.Level_325Code.GDbredObjects1);
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);

gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
gdjs.Level_325Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDmanObjects1Objects, gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDbredObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 6", false);
}}

}


{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 400, "", 0);
}}

}


{


gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
gdjs.Level_325Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
gdjs.Level_325Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("drivingdrone"), gdjs.Level_325Code.GDdrivingdroneObjects1);
{for(var i = 0, len = gdjs.Level_325Code.GDdrivingdroneObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDdrivingdroneObjects1[i].setX(gdjs.Level_325Code.GDdrivingdroneObjects1[i].getX() + (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.Level_325Code.GDlaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);

gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
gdjs.Level_325Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDmanObjects1Objects, gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDlaserObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_325Code.GDmanObjects1 */
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].setY(gdjs.Level_325Code.GDmanObjects1[i].getY() - (1));
}
}{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").setMaxFallingSpeed(0, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("laser"), gdjs.Level_325Code.GDlaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs.Level_325Code.GDmanObjects1);

gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
gdjs.Level_325Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDmanObjects1Objects, gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDlaserObjects1Objects, true, runtimeScene, false);
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_325Code.GDmanObjects1 */
{for(var i = 0, len = gdjs.Level_325Code.GDmanObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDmanObjects1[i].getBehavior("PlatformerObject").setMaxFallingSpeed(700, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("bred"), gdjs.Level_325Code.GDbredObjects1);
{for(var i = 0, len = gdjs.Level_325Code.GDbredObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDbredObjects1[i].setY(gdjs.Level_325Code.GDbredObjects1[i].getY() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bred"), gdjs.Level_325Code.GDbredObjects1);
gdjs.copyArray(runtimeScene.getObjects("stilldrone"), gdjs.Level_325Code.GDstilldroneObjects1);

gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
gdjs.Level_325Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDbredObjects1Objects, gdjs.Level_325Code.mapOfGDgdjs_46Level_95325Code_46GDstilldroneObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 5", false);
}}

}


{


gdjs.Level_325Code.condition0IsTrue_0.val = false;
{
gdjs.Level_325Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level_325Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title screen", false);
}}

}


{


{
}

}


};

gdjs.Level_325Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_325Code.GDmanObjects1.length = 0;
gdjs.Level_325Code.GDmanObjects2.length = 0;
gdjs.Level_325Code.GDgroundObjects1.length = 0;
gdjs.Level_325Code.GDgroundObjects2.length = 0;
gdjs.Level_325Code.GDbredObjects1.length = 0;
gdjs.Level_325Code.GDbredObjects2.length = 0;
gdjs.Level_325Code.GDstilldroneObjects1.length = 0;
gdjs.Level_325Code.GDstilldroneObjects2.length = 0;
gdjs.Level_325Code.GDdrivingdroneObjects1.length = 0;
gdjs.Level_325Code.GDdrivingdroneObjects2.length = 0;
gdjs.Level_325Code.GDlaserObjects1.length = 0;
gdjs.Level_325Code.GDlaserObjects2.length = 0;
gdjs.Level_325Code.GDNewTextObjects1.length = 0;
gdjs.Level_325Code.GDNewTextObjects2.length = 0;

gdjs.Level_325Code.eventsList0(runtimeScene);
return;

}

gdjs['Level_325Code'] = gdjs.Level_325Code;
