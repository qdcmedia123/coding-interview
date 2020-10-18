const data = {
        "2019-11": {
            "date": "2019-11-30",
            "ifa_user": "wF",
            "low_risk": 0,
            "aggressive": 489.48,
            "all": 675.34,
            "balanced": 0,
            "very_conservative": 0,
            "conservative": 0,
            "semi_aggressive": 0,
            "very_aggressive": 185.86
        },
        "2019-12": {
            "date": "2019-12-31",
            "ifa_user": "wF",
            "aggressive": 5493.76,
            "semi_aggressive": 493.87,
            "balanced": 0,
            "conservative": 0,
            "very_conservative": 0,
            "low_risk": 0,
            "all": 8212.54,
            "very_aggressive": 2224.91
        },
        "2020-01": {
            "date": "2020-01-31",
            "ifa_user": "wF",
            "conservative": 0,
            "all": 11656.89,
            "very_conservative": 0,
            "low_risk": 0,
            "balanced": 1,
            "aggressive": 8926.35,
            "very_aggressive": 2236.74,
            "semi_aggressive": 492.8
        },
        "2020-02": {
            "date": "2020-02-29",
            "ifa_user": "wF",
            "very_conservative": 0,
            "all": 11259.7,
            "low_risk": 0,
            "semi_aggressive": 489.17,
            "conservative": 0,
            "balanced": 1,
            "aggressive": 8639.04,
            "very_aggressive": 2130.49
        },
        "2020-03": {
            "date": "2020-03-31",
            "ifa_user": "wF",
            "balanced": 43.23,
            "all": 10762.81,
            "conservative": 0,
            "low_risk": 0,
            "semi_aggressive": 470.88,
            "aggressive": 8206.22,
            "very_aggressive": 2042.48,
            "very_conservative": 0
        },
        "2020-04": {
            "date": "2020-04-30",
            "ifa_user": "wF",
            "very_aggressive": 2659.99,
            "aggressive": 15949.1,
            "semi_aggressive": 861.58,
            "balanced": 3267.57,
            "all": 22738.24,
            "low_risk": 0,
            "conservative": 0,
            "very_conservative": 0
        },
        "2020-05": {
            "date": "2020-05-31",
            "ifa_user": "wF",
            "very_conservative": 0,
            "all": 39203.66,
            "low_risk": 0,
            "conservative": 0,
            "aggressive": 20932.68,
            "semi_aggressive": 11861.63,
            "balanced": 3448.21,
            "very_aggressive": 2961.14
        },
        "2020-06": {
            "date": "2020-06-30",
            "ifa_user": "wF",
            "balanced": 3535.38,
            "aggressive": 33574.51,
            "semi_aggressive": 13230.98,
            "very_aggressive": 3373.77,
            "conservative": 0,
            "very_conservative": 0,
            "all": 53714.64,
            "low_risk": 0
        },
        "2020-07": {
            "date": "2020-07-31",
            "ifa_user": "wF",
            "balanced": 184.07,
            "aggressive": 42994.06,
            "semi_aggressive": 13907.62,
            "all": 63523.53,
            "conservative": 1975.59,
            "low_risk": 0,
            "very_conservative": 0,
            "very_aggressive": 4462.19
        },
        "2020-08": {
            "date": "2020-08-31",
            "ifa_user": "wF",
            "conservative": 2976.92,
            "very_conservative": 0,
            "all": 76373.3,
            "balanced": 187.13,
            "semi_aggressive": 20623.25,
            "aggressive": 47473.68,
            "very_aggressive": 5112.32,
            "low_risk": 0
        },
        "2020-09": {
            "date": "2020-09-30",
            "ifa_user": "wF",
            "balanced": 273.66,
            "low_risk": 0,
            "very_conservative": 0,
            "conservative": 2943.97,
            "semi_aggressive": 44414.67,
            "aggressive": 55779.39,
            "very_aggressive": 9634.14,
            "all": 113045.83
        },
        "2020-10": {
            "date": "2020-10-15",
            "ifa_user": "wF",
            "all": 121964.55,
            "very_conservative": 91.95,
            "conservative": 2973.95,
            "balanced": 277.08,
            "semi_aggressive": 45264.81,
            "aggressive": 62228.65,
            "very_aggressive": 11128.11,
            "low_risk": 0
        }
    };

const newObject = [];

for(const [, value] of Object.entries(data)) {
                newObject.push(value);
            }

console.log(newObject)