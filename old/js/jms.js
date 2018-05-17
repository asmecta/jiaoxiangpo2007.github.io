/**
 * Created by jiaox on 2016-7-31.
 */
(function () {
    var JMS = function (id,rowCount,colCount,minLandMineCount,maxLandMineCount) {
        if(!(this instanceof JMS))
            return new JMS(id,rowCount,colCount,minLandMineCount,maxLandMineCount);
        this.doc = document;
        this,table = this.doc.getElementById(id);
        this.cells = this.table.getElementsByTagName("td");
        this.rowCount = rowCount || 10;
        this.colCount = colCount || 10;
        this.landMineCount = 0;
    }
})