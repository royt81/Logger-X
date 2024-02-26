//console.log(getFormattedDate(plusSeventeenDay));
//console.log(getFormattedDate(plusTenDaysAgo));
//console.log(getFormattedDateForAPI(dateAPI));
		

// const plusSeventeenDay = new Date();
// plusSeventeenDay.setDate(plusSeventeenDay.getDate() + (17 * 1.4));

// const plusTenDaysAgo = new Date();
// plusTenDaysAgo.setDate(plusTenDaysAgo.getDate() + (10 * 1.4));
/*
console.log(fetchData('DE', '2023-05-19', '10'))
console.log(fetchData('DE', dateAPI, 17))
fetchData('DE', dateAPI, 17)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
*/
// == END == date department // 


// days calcultor API // 6 weeks
// async function fetchData(countryCode, startDate, increment) {
//   const url = `https://working-days.p.rapidapi.com/1.3/add_working_days?country_code=${countryCode}&start_date=${startDate}&increment=${increment}&include_start=true&configuration=Quebec`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3a36f5e67amshd9016e2e18744aap1f3a91jsn9aad55a7fab2',
//       'X-RapidAPI-Host': 'working-days.p.rapidapi.com'
//     }
//   };
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(`Result for increment ${increment} days: ${result}`);
//   } catch (error) {
//     console.error('why ' + error);
//   }
// }
/////   startDate, 2023-05-19
// other day calculator API


// async function testAPII(countryCode, startDate, increment){
//   const url = `https://business-days-work-days-calculator.p.rapidapi.com/api/v1/get_result?state=${countryCode}&work_days=${increment}&start_date=${startDate}&options=0`;
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3a36f5e67amshd9016e2e18744aap1f3a91jsn9aad55a7fab2',
// 		'X-RapidAPI-Host': 'business-days-work-days-calculator.p.rapidapi.com'
// 	}
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log((result));
//   } catch (error) {
//     console.error(error);
//   }
// }
// testAPII('DE', '2024-02-22', '17').then(result => {
//   console.log(result);
// })
// .catch(error => {
//   console.error(error);
// });
// getDate


// const oldDate = document.createElement('div'); 
// oldDate.id = 'oldDate'; 
// oldDateText = `
// 6 weeks: ${getFormattedDate(sixWeeksAgo)}
// +17 days: ${main(17)}
// `;

// oldDate.innerText = oldDateText
// contact.appendChild(oldDate);



// async function fetchData(incremente){
//     const startDate = function getFormattedDateForAPI(date) {
//     const dd = String(date.getDate()).padStart(2, '0');
//     const mm = String(date.getMonth() + 1).padStart(2, '0'); 
//     const yyyy = date.getFullYear();
//     return yyyy + '-' + mm + '-' + dd;
//     }
  
//   const url = `https://business-days-work-days-calculator.p.rapidapi.com/api/v1/get_result?state=DE&work_days=${incremente}&start_date=${startDate}&options=0`;
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3a36f5e67amshd9016e2e18744aap1f3a91jsn9aad55a7fab2',
// 		'X-RapidAPI-Host': 'business-days-work-days-calculator.p.rapidapi.com'
// 	}
//   };
//     try{
//         const response = await fetch(url, options);
//         console.log(response);
//         const data = await response.text();
//         console.log(data);
        
//         function formatDate(inputDate) {
//           const date = new Date(inputDate);
//           const day = String(date.getDate()).padStart(2, '0');
//           const month = String(date.getMonth() + 1).padStart(2, '0');
//           const year = date.getFullYear();

//           return  `${day}.${month}.${year}`;
//         }
//         console.log(data)
//         const result = formatDate(`${data}`)
//         console.log(result)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// fetchData(17)today

///////////////////////////////////////////////------ working

// async function getOldTime(gap) {
//   const today = new Date();

//   function getFormattedDateForAPI(date) {
//     const dd = String(date.getDate()).padStart(2, '0');
//     const mm = String(date.getMonth() + 1).padStart(2, '0');
//     const yyyy = date.getFullYear();
//     return yyyy + '-' + mm + '-' + dd;
//   }

//   const dateAPI = getFormattedDateForAPI(today);
//   console.log(dateAPI.toString());

//   const url = `https://business-days-work-days-calculator.p.rapidapi.com/api/v1/get_result?state=DE&work_days=${gap}&start_date=${dateAPI}&options=0`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3a36f5e67amshd9016e2e18744aap1f3a91jsn9aad55a7fab2',
//       'X-RapidAPI-Host': 'business-days-work-days-calculator.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();

//     console.log('API Response:', result); 

//     function formatDate(inputDate) {
//       const date = new Date(inputDate);
//       const day = String(date.getDate()).padStart(2, '0');
//       const month = String(date.getMonth() + 1).padStart(2, '0');
//       const year = date.getFullYear();
//       return `${day}.${month}.${year}`;
//     }

//     console.log(formatDate(result));
//   } catch (error) {
//     console.error(error);
//     return null; 
//   }
// }

//getOldTime(17);