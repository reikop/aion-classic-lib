import serverList from "../data/ServerLists";
import _ from "lodash";

export default {
    findServerById(type:string){
        return _.find(serverList, {type})
    },
    findServerByName(name:string){
        return _.find(serverList, {name})
    },
    getServerList(){
        return serverList;
    }
}