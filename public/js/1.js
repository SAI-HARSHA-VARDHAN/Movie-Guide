 angular.module('myApp', []).controller('namesCtrl', function($scope) {
                    $scope.names =['Dowlaiswaram', 'Nandyal','Srikakulam', 'Kota', 'Jharia', 'Kandla', 'Madgaon', 'Narsinghgarh', 'Kaithal', 'Khambhat', 'Kadapa', 'Murshidabad', 'Bishnupur', 'New Delhi', 'Ranchi', 'Kurukshetra', 'Lalitpur', 'Alwar', 'Haridwar', 'Tehri', 'Tumkuru', 'Thiruvananthapuram', 'Panna', 'Deoria', 'Ratlam', 'Kheda', 'Doda', 'Coimbatore', 'Baripada', 'Ganganagar', 'Dehra Dun', 'Baleshwar', 'Ramanathapuram', 'Bharatpur', 'Ayodhya', 'Surendranagar', 'Mattancheri', 'Bhadravati', 'Malda', 'Mirzapur-Vindhyachal', 'Kolhapur', 'Rewari', 'Sevagram', 'Paradip', 'Mahbubnagar', 'Jaisalmer', 'Chhindwara', 'Machilipatnam', 'Betul', 'Durg', 'Ratnagiri', 'Durgapur', 'Kamarhati', 'Faridabad', 'Bid', 'Sitapur', 'Mathura', 'Chaibasa', 'Bhandara', 'Bikaner', 'Sikar', 'Sambhal', 'Eluru', 'Dibrugarh', 'Rajnandgaon', 'Shravanabelagola', 'Bharuch', 'Leh', 'Ballia', 'Shantiniketan', 'Madikeri', 'Meerut', 'Jhabua', 'Surat', 'Vasai-Virar', 'Rajauri', 'Mhow', 'Dhanbad', 'Bhagalpur', 'Jaunpur', 'Halebid', 'Ulhasnagar', 'Indore', 'Palanpur', 'Dumka', 'Hassan', 'Baharampur', 'Shimla', 'Katihar', 'Hamirpur', 'Bhatpara', 'Srinagar', 'Rewa', 'Jaipur', 'Keonjhar', 'Firozpur Jhirka', 'Puducherry', 'Bhojpur', 'Bhusawal', 'Budge Budge', 'Chittaurgarh', 'Mahabaleshwar', 'Sehore', 'Belgavi', 'Ludhiana', 'Guntur', 'Bundi', 'Morvi', 'Vijayawada', 'Jammu', 'Tiruchchirappalli', 'Sibsagar', 'Ambala', 'Nizamabad', 'Phek', 'Chidambaram', 'Bhilwara', 'Rampur', 'Jorhat', 'Malegaon', 'Karnal', 'Ingraj Bazar', 'Kurnool', 'Raisen', 'Erode', 'Cherrapunji', 'Bidar', 'Balurghat', 'Una', 'Baruni', 'Daman', 'Burhanpur', 'Nagpur', 'Port Blair', 'Shivpuri', 'Nashik', 'Junagadh', 'Udaipur', 'Rajgarh', 'Khandwa', 'Kodaikanal', 'Jind', 'Bulandshahr', 'Kanchrapara', 'Nagercoil', 'Barwani', 'Khajuraho', 'Bankura', 'Abu', 'Nowgong', 'Aurangabad', 'Neemuch', 'Shahjahanpur', 'Chandragiri', 'Udhagamandalam', 'Tirunelveli', 'Narwar', 'Hazaribag', 'Basirhat', 'Bihar Sharif', 'Darbhanga', 'Silvassa', 'Amaravati', 'Itanagar', 'Jagdalpur', 'Mysuru', 'Fatehpur', 'Tonk', 'Anantapur', 'Veraval', 'Darjiling', 'Ahmadnagar', 'Tirupati', 'Bara Banki', 'Pali', 'Almora', 'Kalaburagi', 'Nabha', 'Yemmiganur', 'Tezpur', 'Phulabani', 'Balaghat', 'Satara', 'Arcot', 'Kolkata', 'Chittoor', 'Khammam', 'Tinsukia', 'Baramula', 'Idukki', 'Nathdwara', 'Bareilly', 'Parbhani', 'Hoshiarpur', 'Ambikapur', 'Sirohi', 'Diamond Harbour', 'Chengalpattu', 'Rajahmundry', 'Barmer', 'Koraput', 'Gulmarg', 'Siliguri', 'Nagaur', 'Kangra', 'Mussoorie', 'Giridih', 'Kakinada', 'Motihari', 'Patan', 'Siwan', 'Ghaziabad', 'Hoshangabad', 'Tamluk', 'Asansol', 'Jalgaon', 'Bilaspur', 'Begusarai', 'Sarangpur', 'Sirsa', 'Raichur', 'Buldana', 'Bally', 'Samastipur', 'Pune', 'Beawar', 'Imphal', 'Kochi', 'Dum Dum', 'Hathras', 'Dharmshala', 'Palashi', 'Udayagiri', 'Dhar', 'Saraikela', 'Sagar', 'Amritsar', 'Anantnag', 'Salem', 'Sultanpur', 'Mandya', 'Konark', 'Ahmadabad', 'Damoh', 'Mumbai', 'Azamgarh', 'Nadiad', 'Mandla', 'Thrissur', 'Hansi', 'Hardoi', 'Daulatabad', 'Kanpur', 'Purulia', 'Pandharpur', 'Kathua', 'Bodh Gaya', 'Ara', 'Prayagraj', 'Jamshedpur', 'Kannauj', 'Mainpuri', 'Sambalpur', 'Bhilai', 'Amreli', 'Kapurthala', 'Davangere', 'Buxar', 'Sangrur', 'Kharagpur', 'Etah', 'Shivamogga', 'Rajapalaiyam', 'Sawai Madhopur', 'Dalhousie', 'Kollam', 'Okha', 'Etawah', 'Farrukhabad-cum-Fatehgarh', 'Chandigarh', 'Vellore', 'Dinapur Nizamat', 'Fatehpur Sikri', 'Nagappattinam', 'Narsimhapur', 'Panipat', 'Deoghar', 'Delhi', 'Rajkot', 'Mamallapuram', 'Saharsa', 'Dhamtari', 'Seoni', 'Bharhut', 'Agra', 'Bhopal', 'Kalyan', 'Gyalsing', 'Alappuzha', 'Chennai', 'Muzaffarpur', 'Chhatarpur', 'Jhunjhunu', 'Bijnor', 'Ujjain', 'Sitamarhi', 'Jhalawar', 'Satna', 'Dhule', 'Dehri', 'Pudukkottai', 'Ballari', 'Kishangarh', 'Kalimpong', 'Lakhimpur', 'Sangli', 'Pusa', 'Gangtok', 'Silchar', 'Karaikal', 'Bokaro', 'Jalor', 'Nagaon', 'Shillong', 'Chikkamagaluru', 'Nahan', 'Krishnanagar', 'Aizawl', 'Udhampur', 'Kumbakonam', 'Hyderabad', 'Shajapur', 'Bhavnagar', 'Gaya', 'Balangir', 'Siuri', 'Kozhikode', 'Firozpur', 'Chitradurga', 'Panaji', 'Gorakhpur', 'Merta', 'Santipur', 'Madhubani', 'Mandsaur', 'Datia', 'Faridkot', 'Mahesana', 'Halisahar', 'Dewas', 'Shrirampur', 'Navadwip', 'Basti', 'Solapur', 'Nanded', 'Hubballi-Dharwad', 'Porbandar', 'Wardha', 'Partapgarh', 'Munger', 'Agartala', 'Cuddalore', 'Chapra', 'Thanjavur', 'Diu', 'Barasat', 'Titagarh', 'Shahdol', 'Badami', 'Cuttack', 'Palakkad', 'Panihati', 'Amer', 'Hajipur', 'Pilibhit', 'Lucknow', 'Dispur', 'Valsad', 'Churu', 'Badagara', 'Pithoragarh', 'Yavatmal', 'Lachung', 'Faizabad', 'Kolar', 'Kottayam', 'Wokha', 'Chamba', 'Batala', 'Karli', 'Sangareddi', 'Kanchipuram', 'Dhenkanal', 'Tiruppur', 'Mahe', 'Jodhpur', 'Jabalpur', 'Saharanpur', 'Rajmahal', 'Purnia', 'Jhansi', 'Raipur', 'Goa', 'Puri', 'Rupnagar', 'Burdwan', 'Murwara', 'Madurai', 'Godhra', 'Phalodi', 'Bhind', 'Hanumangarh', 'Kanniyakumari', 'Tuticorin', 'Karimnagar', 'Dwarka', 'Sasaram', 'Patiala', 'Koch Bihar', 'Brahmapur', 'Lunglei', 'Vidisha', 'Bithur', 'Raiganj', 'Guna', 'Jalpaiguri', 'Chandernagore', 'Jamalpur', 'Ajmer', 'Aligarh', 'Visakhapatnam', 'Varanasi', 'Shahpura', 'Kannur', 'Mandi', 'Punch', 'Alipore', 'Mangaluru', 'Warangal', 'Gandhinagar', 'Rohtak', 'Gurgaon', 'Matheran', 'Alipur Duar', 'Muzaffarnagar', 'Bhubaneshwar', 'Baranagar', 'Bhuj', 'Jalaun', 'Pehowa', 'Akola', 'Guwahati', 'Banda', 'Navsari', 'Dharmapuri', 'Mangan', 'Gurdaspur', 'Sonipat', 'Hugli', 'Gonda', 'Amravati', 'Sheopur', 'Bettiah', 'Dhuburi', 'Morena', 'Zunheboto', 'Thalassery', 'Hisar', 'Maheshwar', 'Kullu', 'Bhiwani', 'Bahraich', 'Yanam', 'Orchha', 'Midnapore', 'Ghazipur', 'Gwalior', 'Haora', 'Palayankottai', 'Nagarjunakoṇḍa', 'Moradabad', 'Budaun', 'Dindigul', 'Chandrapur', 'Barrackpore', 'Jamnagar', 'Dhaulpur', 'Thane', 'Amroha', 'Nainital', 'Osmanabad', 'Dungarpur', 'Rae Bareli', 'Shrirangapattana', 'Pushkar', 'Khargon', 'Patna', 'Kohima', 'Jalandhar', 'Mon', 'Itarsi', 'Bangalore', 'Vizianagaram', 'Adoni'];
                    $scope.myFunc=function(x){
                        submitform(x);
                    }
                });
 
 
function submitform(a){ 
                        document.getElementById("location").value=a;
                        document.getElementById("form").submit();
                    }

$(document).ready(function(){
                $("#loading").hide();
                $("li").on("click",function(){
                    $("#loading").show();
                    $("#content").hide();
            })
        })