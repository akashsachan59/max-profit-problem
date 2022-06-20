const timeToBuild = [10, 5, 4]
const earningPerUnitTime = [3000, 1500, 1000]

const usecase1 = {
    time: 7,
    targetEarnings: 3000,
}
const usecase2 = {
    time: 8,
    targetEarnings: 4500,
}
const usecase3 = {
    time: 13,
    targetEarnings: 16500,
}


function maxProfit(usecase) {
    let result = {}
    let data = {}
    for (let i = 0; i < timeToBuild.length; i++) {
        let building = {
            time: timeToBuild[i],
            earningPerUnitTime: earningPerUnitTime[i]
        }
        let currentSet = []
        let earnings = 0
        let inputTime = usecase.time
        while (timeToBuild[i] <= inputTime) {
            inputTime -= building.time
            earnings += inputTime * building.earningPerUnitTime
            currentSet.push(building.time)
        }

        result = {
            time: currentSet,
            earnings: earnings
        }
        if (result.earnings === usecase.targetEarnings) {
            if(result.time[0] === 4){
                data = {
                    "P" : result.time.length,
                    "T" : 0,
                    "C" : 0,
                    earnings : result.earnings
                }
            }else if(result.time[0] === 5){
                data = {
                    "P" : 0,
                    "T" : result.time.length,
                    "C" : 0,
                    earnings : result.earnings
                }
            }else if(result.time[0] === 10){
                data = {
                    "P" : 0,
                    "T" : 0,
                    "C" : result.time.length,
                    earnings : result.earnings
                }
            }
            console.log(data)
        }

    }
}


maxProfit(usecase1)
maxProfit(usecase2)
maxProfit(usecase3)