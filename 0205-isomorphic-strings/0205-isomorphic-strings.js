/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic =(s, t) =>{
    if(s.length !== t.length){
        return false
    }

    let map = new Map()
    let set = new Set()
    for(let i = 0; i < s.length; i++){
        let char1 = s.charAt(i)
        let char2 = t.charAt(i)
            if(map.has(char1)){
                if(map.get(char1) !== char2){

                return false
                }
            }else {
                if(set.has(char2)){
                    return false
                }
                map.set(char1,char2)
                set.add(char2)
      }
    }
    return true;
};




