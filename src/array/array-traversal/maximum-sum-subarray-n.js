// Given an array we have to find maximum sum in contiguous subarray
// input[1, -2, 3, 4, -5, 6], output = 8 => [3, 4, -5, 6]
//complexity is O(n)


function maximumSumSubarray(arr) {
  let tempSum = 0
  let finalSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (tempSum > finalSum) {
      finalSum = tempSum;
    }
    if (tempSum < 0) {
      tempSum = 0;
    }
  }
  return finalSum;
}

//141
let arr = [-412, -158, -24, 73, 30, -389, -316, -120, 71, -406, -359, -337, 72, -358, -73, 79, -75, -186, -23, -121, 77, -399, -476, -402, 71, -332, 10, -184, -276, -466, 0, -438, -470, -409, -298, -282, -143, -69, -399, 3, 24, 68, -248, -136, -9, -496, -340, -291, -281, -357, -475, -17, -52, -492, -70, -91, -20, -373, -275, -271, -349, -103, -178, -388, -51, 86, -69, 88, 22, -134, -74, 65, -453, -239, -253, -71, 89, -456, -117, -188, -191, -18, 2, -102, -60, 24, 85, -459, -193, -295, -480, -346, 3, -43, -379, -464, -481, -370, -318, -156, -361, -222, -347, 80, -55, 52, -166, -369, -159, -414, -365, 9, -375, -94, -364, -314, 80, -297, -271, -121, -192, -119, 76, -324, -234, -41, 17, -248, -56, -78, -79, -72, 84, -38, -180, -109, 14, -377, -392, -60, -409, -282, -218, 85, -493, -474, -190, -177, -327, -292, -385, -64, -129, -219, -256, -87, -383, -121, 46, -467, 42, 0, -194, -403, -305, 37, -410, -78, -142, -288, 54, 45, -351, -219, 25, -27, -284, -133, -80, -104, -215, -468, -369, -418, 63, -357, -43, -295, -57, 28, -412, -182, -489, -101, -265, -451, -213, -485, -178, 43, -352, -198, 39, 18, -24, -188, -106, 8, -377, -345, -284, -497, -130, 31, -4, -283, -106, -153, -166, -162, -398, -188, -465, -478, 15, -300, -177, -201, -170, -106, -336, -312, -388, -36, -390, 70, -25, -440, -181, -78, -172, -359, -253, -72, 81, -117, -176, -378, -263, -479, -226, -161, 62, -264, -492, -332, -160, 67, -195, -265, 11, -96, -133, -301, -282, -395, 8, -78, -365, -325, -394, -199, -88, -496, 100, -147, -476, -18, -480, 85, -407, -131, 100, -109, -165, -419, -309, -170, 50, 4, -469, -433, 55, -458, -216, -149, -137, 12, 95, -153, -44, -125, -18, 74, -499, -391, 17, -119, 7, -149, -377, -274, -499, -255, -278, -455, -389, -101, -148, -251, -273, -458, -215, -295, -122, -500, -32, -197, -499, -374, -409, -342, -219, -460, -439, -399, -289, -53, -458, -203, -108, -422, -185, -336, -435, 29, -484, -16, -83, -205, -191, -444, 36, -482, 0, -364, -224, 94, -270, -38, 64, -203, -328, -204, 50, -413, -143, -434, -174, 24, -17, -324, -292, 48, -384, -120, -152, -382, -10, -62, -361, -214, -361, -41, -163, -402, 42, -194, 5, 37, 39, 28, -286, -280, -104, 28, -218, -386, -51, 13, -97, -161, -131, -171, -376, -228, -168, -12, -426, -234, -323, -438, 84, -235, -445, 82, -51, -227, -306, 58, -482, -3, -258, -465, 65, -214, -55, -376, -94, -227, 92, 49, -334, 46, -462, -282, 79, 7, -400, -435, -107, -93, 77, -194, -290, -144, 79, -477, -140, -154, -237, -35, -333, -257, -39, -359, -232, -71, -247, -388, -22, -282, -163, -193, -445, -66, 86, -340, -200, -38, -256, -218, -170, -486, -387, 16, -79, -235, -283, -479, -449, 44, -254, -266, 63, 75, -418, -494, -65, -87, 66, -402, 94, -276, -452, -488, -438, -441, -77, -52, -54, -408, -472, -8, -150, 88, -127, 98, -159, -10, 24, -484, -138, -323, -117, -118, 30, -458, 60, -33, -462, -301, 76, -102, -262, -338, -224, 8, -87, 14, -154, -340, -152, -124, -55, -126, -457, -366, 81, -441, -79, -365, -417, -192, -14, -406, 74, -216, -269, -346, 56, 57, -171, -339, -157, -436, -340, -139, 28, -82, -235, -269, -31, -370, -136, -289, -110, -440, -320, -306, -319, 88, -409, 10, -9, -257, -58, -390, -148, 46, -162, -439, -145, -376, -430, -116, -303, -60, -80, -453, -17, -230, -157, 89, -215, -492, -280, -263, 70, -495, -236, 34, -107, -400, -455, -347, -376, -128, -56, 36, -483, -375, -44, -400, -24, -23, -27, -130, -264, 50, -15];

// let arr = [1, 0, 2, -1, 0, 1];
// let arr = [0,0,0,0,0,0];
console.log(maximumSumSubarray(arr));