export function getCookies(name) {
    let strcookie = document.cookie; //获取cookie字符串
    let arrcookie = strcookie.split("; "); //分割
    //遍历匹配
    for (let i = 0; i < arrcookie.length; i++) {
        let arr = arrcookie[i].split("=");
        if (arr[0] == name) {
            return arr[1];
        }
    }
    return "";
}