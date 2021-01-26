// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius: 0,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    getPlayerDistance: function(){
        var playerPos = this.game.player.getPosition();

        var dist = this.node.position.sub(playerPos).mag();

        return dist;
    },

    onPicked: function(){
        this.game.spawnNewStar();

        this.node.destroy();
    },

    update:function(){
        if(this.getPlayerDistance()<this.pickRadius){
            this.onPicked();
            return;
        }
    },

    start () {

    },

    // update (dt) {},
});
