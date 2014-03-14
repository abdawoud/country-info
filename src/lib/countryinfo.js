"use strict"

var countries =
    [{name:'AFGHANISTAN', code:'93', towLetters:'AF', threeLetters:'AFG'},
    {name:'ALBANIA', code:'355', towLetters:'AL', threeLetters:'ALB'},
    {name:'ALGERIA', code:'213', towLetters:'DZ', threeLetters:'DZA'},
    {name:'AMERICAN SAMOA', code:'1 684', towLetters:'AS', threeLetters:'ASM'},
    {name:'ANDORRA', code:'376', towLetters:'AD', threeLetters:'AND'},
    {name:'ANGOLA', code:'244', towLetters:'AO', threeLetters:'AGO'},
    {name:'ANGUILLA', code:'1 264', towLetters:'AI', threeLetters:'AIA'},
    {name:'ANTARCTICA', code:'6721', towLetters:'AQ', threeLetters:'ATA'},
    {name:'ANTIGUA AND BARBUDA', code:'1 268', towLetters:'AG', threeLetters:'ATG'},
    {name:'ARGENTINA', code:'54', towLetters:'AR', threeLetters:'ARG'},
    {name:'ARMENIA', code:'374', towLetters:'AM', threeLetters:'ARM'},
    {name:'ARUBA', code:'297', towLetters:'AW', threeLetters:'ABW'},
    {name:'ASCENSION', code:'247', towLetters:'AC', threeLetters:'ASC'},
    {name:'AUSTRALIA', code:'61', towLetters:'AU', threeLetters:'AUS'},
    {name:'AUSTRIA', code:'43', towLetters:'AT', threeLetters:'AUT'},
    {name:'AZERBAIJAN', code:'994', towLetters:'AZ', threeLetters:'AZE'},
    {name:'BAHAMAS', code:'1 242', towLetters:'BS', threeLetters:'BHS'},
    {name:'BAHRAIN', code:'973', towLetters:'BH', threeLetters:'BHR'},
    {name:'BANGLADESH', code:'880', towLetters:'BD', threeLetters:'BGD'},
    {name:'BARBADOS', code:'1 246', towLetters:'BB', threeLetters:'BRB'},
    {name:'BELARUS', code:'375', towLetters:'BY', threeLetters:'BLR'},
    {name:'BELGIUM', code:'32', towLetters:'BE', threeLetters:'BEL'},
    {name:'BELIZE', code:'501', towLetters:'BZ', threeLetters:'BLZ'},
    {name:'BENIN', code:'229', towLetters:'BJ', threeLetters:'BEN'},
    {name:'BERMUDA', code:'1 441', towLetters:'BM', threeLetters:'BMU'},
    {name:'BHUTAN', code:'975', towLetters:'BT', threeLetters:'BTN'},
    {name:'BOLIVIA', code:'591', towLetters:'BO', threeLetters:'BOL'},
    {name:'BOSNIA AND HERZEGOWINA', code:'387', towLetters:'BA', threeLetters:'BIH'},
    {name:'BOTSWANA', code:'267', towLetters:'BW', threeLetters:'BWA'},
    {name:'BRAZIL', code:'55', towLetters:'BR', threeLetters:'BRA'},
    {name:'BRITISH INDIAN OCEAN TERRITORY', code:'246', towLetters:'IO', threeLetters:'IOT'},
    {name:'VIRGIN ISLANDS (BRITISH)', code:'1 284', towLetters:'VG', threeLetters:'VGB'},
    {name:'BRUNEI DARUSSALAM', code:'673', towLetters:'BN', threeLetters:'BRN'},
    {name:'BULGARIA', code:'359', towLetters:'BG', threeLetters:'BGR'},
    {name:'BURKINA FASO', code:'226', towLetters:'BF', threeLetters:'BFA'},
    {name:'BURUNDI', code:'257', towLetters:'BI', threeLetters:'BDI'},
    {name:'CAMBODIA', code:'855', towLetters:'KH', threeLetters:'KHM'},
    {name:'CAMEROON', code:'237', towLetters:'CM', threeLetters:'CMR'},
    {name:'CANADA', code:'1', towLetters:'CA', threeLetters:'CAN'},
    {name:'CAPE VERDE', code:'238', towLetters:'CV', threeLetters:'CPV'},
    {name:'CAYMAN ISLANDS', code:'1 345', towLetters:'KY', threeLetters:'CYM'},
    {name:'CENTRAL AFRICAN REPUBLIC', code:'236', towLetters:'CF', threeLetters:'CAF'},
    {name:'CHAD', code:'235', towLetters:'TD', threeLetters:'TCD'},
    {name:'CHILE', code:'56', towLetters:'CL', threeLetters:'CHL'},
    {name:'CHINA', code:'86', towLetters:'CN', threeLetters:'CHN'},
    {name:'COLOMBIA', code:'57', towLetters:'CO', threeLetters:'COL'},
    {name:'COMOROS', code:'269', towLetters:'KM', threeLetters:'COM'},
    {name:'CONGO, THE DRC', code:'243', towLetters:'CD', threeLetters:'COD'},
    {name:'CONGO', code:'242', towLetters:'CG', threeLetters:'COG'},
    {name:'COOK ISLANDS', code:'682', towLetters:'CK', threeLetters:'COK'},
    {name:'COSTA RICA', code:'506', towLetters:'CR', threeLetters:'CRI'},
    {name:'COTE D\'IVOIRE', code:'225', towLetters:'CI', threeLetters:'CIV'},
    {name:'CROATIA (local name: Hrvatska)', code:'385', towLetters:'HR', threeLetters:'HRV'},
    {name:'CUBA', code:'53', towLetters:'CU', threeLetters:'CUB'},
    {name:'Curaçao', code:'599', towLetters:'CW', threeLetters:'CUW'},
    {name:'CYPRUS', code:'357', towLetters:'CY', threeLetters:'CYP'},
    {name:'CZECH REPUBLIC', code:'420', towLetters:'CZ', threeLetters:'CZE'},
    {name:'DENMARK', code:'45', towLetters:'DK', threeLetters:'DNK'},
    {name:'DJIBOUTI', code:'253', towLetters:'DJ', threeLetters:'DJI'},
    {name:'DOMINICA', code:'1 767', towLetters:'DM', threeLetters:'DMA'},
    {name:'DOMINICAN REPUBLIC', code:'1 809', towLetters:'DO', threeLetters:'DOM'},
    {name:'EAST TIMOR', code:'670', towLetters:'TP', threeLetters:'TMP'},
    {name:'ECUADOR', code:'593', towLetters:'EC', threeLetters:'ECU'},
    {name:'EGYPT', code:'20', towLetters:'EG', threeLetters:'EGY'},
    {name:'EL SALVADOR', code:'503', towLetters:'SV', threeLetters:'SLV'},
    {name:'EQUATORIAL GUINEA', code:'240', towLetters:'GQ', threeLetters:'GNQ'},
    {name:'ERITREA', code:'291', towLetters:'ER', threeLetters:'ERI'},
    {name:'ESTONIA', code:'372', towLetters:'EE', threeLetters:'EST'},
    {name:'ETHIOPIA', code:'251', towLetters:'ET', threeLetters:'ETH'},
    {name:'FALKLAND ISLANDS (MALVINAS)', code:'500', towLetters:'FK', threeLetters:'FLK'},
    {name:'FAROE ISLANDS', code:'298', towLetters:'FO', threeLetters:'FRO'},
    {name:'FIJI', code:'679', towLetters:'FJ', threeLetters:'FJI'},
    {name:'FINLAND', code:'358', towLetters:'FI', threeLetters:'FIN'},
    {name:'FRANCE', code:'33', towLetters:'FR', threeLetters:'FRA'},
    {name:'FRENCH GUIANA', code:'594', towLetters:'GF', threeLetters:'GUF'},
    {name:'FRENCH POLYNESIA', code:'689', towLetters:'PF', threeLetters:'PYF'},
    {name:'GABON', code:'241', towLetters:'GA', threeLetters:'GAB'},
    {name:'GAMBIA', code:'220', towLetters:'GM', threeLetters:'GMB'},
    {name:'GEORGIA', code:'995', towLetters:'GE', threeLetters:'GEO'},
    {name:'GERMANY', code:'49', towLetters:'DE', threeLetters:'DEU'},
    {name:'GHANA', code:'233', towLetters:'GH', threeLetters:'GHA'},
    {name:'GIBRALTAR', code:'350', towLetters:'GI', threeLetters:'GIB'},
    {name:'GREECE', code:'30', towLetters:'GR', threeLetters:'GRC'},
    {name:'GREENLAND', code:'299', towLetters:'GL', threeLetters:'GRL'},
    {name:'GRENADA', code:'1 473', towLetters:'GD', threeLetters:'GRD'},
    {name:'GUADELOUPE', code:'590', towLetters:'GP', threeLetters:'GLP'},
    {name:'GUAM', code:'1 671', towLetters:'GU', threeLetters:'GUM'},
    {name:'GUATEMALA', code:'502', towLetters:'GT', threeLetters:'GTM'},
    {name:'GUINEA', code:'224', towLetters:'GN', threeLetters:'GIN'},
    {name:'GUINEA-BISSAU', code:'245', towLetters:'GW', threeLetters:'GNB'},
    {name:'GUYANA', code:'592', towLetters:'GY', threeLetters:'GUY'},
    {name:'HAITI', code:'509', towLetters:'HT', threeLetters:'HTI'},
    {name:'HONDURAS', code:'504', towLetters:'HN', threeLetters:'HND'},
    {name:'HONG KONG', code:'852', towLetters:'HK', threeLetters:'HKG'},
    {name:'HUNGARY', code:'36', towLetters:'HU', threeLetters:'HUN'},
    {name:'ICELAND', code:'354', towLetters:'IS', threeLetters:'ISL'},
    {name:'INDIA', code:'91', towLetters:'IN', threeLetters:'IND'},
    {name:'INDONESIA', code:'62', towLetters:'ID', threeLetters:'IDN'},
    {name:'IRAQ', code:'964', towLetters:'IQ', threeLetters:'IRQ'},
    {name:'IRAN (ISLAMIC REPUBLIC OF)', code:'98', towLetters:'IR', threeLetters:'IRN'},
    {name:'IRELAND', code:'353', towLetters:'IE', threeLetters:'IRL'},
    {name:'Occupied Palestine', code:'972', towLetters:'IL', threeLetters:'PSE'},
    {name:'ITALY', code:'39', towLetters:'IT', threeLetters:'ITA'},
    {name:'JAMAICA', code:'1 876', towLetters:'JM', threeLetters:'JAM'},
    {name:'JAPAN', code:'81', towLetters:'JP', threeLetters:'JPN'},
    {name:'JORDAN', code:'962', towLetters:'JO', threeLetters:'JOR'},
    {name:'KAZAKHSTAN', code:'7', towLetters:'KZ', threeLetters:'KAZ'},
    {name:'KENYA', code:'254', towLetters:'KE', threeLetters:'KEN'},
    {name:'KIRIBATI', code:'686', towLetters:'KI', threeLetters:'KIR'},
    {name:'KUWAIT', code:'965', towLetters:'KW', threeLetters:'KWT'},
    {name:'KYRGYZSTAN', code:'996', towLetters:'KG', threeLetters:'KGZ'},
    {name:'LAOS', code:'856', towLetters:'LA', threeLetters:'LAO'},
    {name:'LATVIA', code:'371', towLetters:'LV', threeLetters:'LVA'},
    {name:'LEBANON', code:'961', towLetters:'LB', threeLetters:'LBN'},
    {name:'LESOTHO', code:'266', towLetters:'LS', threeLetters:'LSO'},
    {name:'LIBERIA', code:'231', towLetters:'LR', threeLetters:'LBR'},
    {name:'LIBYAN ARAB JAMAHIRIYA', code:'218', towLetters:'LY', threeLetters:'LBY'},
    {name:'LIECHTENSTEIN', code:'423', towLetters:'LI', threeLetters:'LIE'},
    {name:'LITHUANIA', code:'370', towLetters:'LT', threeLetters:'LTU'},
    {name:'LUXEMBOURG', code:'352', towLetters:'LU', threeLetters:'LUX'},
    {name:'MACAU', code:'853', towLetters:'MO', threeLetters:'MAC'},
    {name:'MACEDONIA', code:'389', towLetters:'MK', threeLetters:'MKD'},
    {name:'MADAGASCAR', code:'261', towLetters:'MG', threeLetters:'MDG'},
    {name:'MALAWI', code:'265', towLetters:'MW', threeLetters:'MWI'},
    {name:'MALAYSIA', code:'60', towLetters:'MY', threeLetters:'MYS'},
    {name:'MALDIVES', code:'960', towLetters:'MV', threeLetters:'MDV'},
    {name:'MALI', code:'223', towLetters:'ML', threeLetters:'MLI'},
    {name:'MALTA', code:'356', towLetters:'MT', threeLetters:'MLT'},
    {name:'MARSHALL ISLANDS', code:'692', towLetters:'MH', threeLetters:'MHL'},
    {name:'MARTINIQUE', code:'596', towLetters:'MQ', threeLetters:'MTQ'},
    {name:'MAURITANIA', code:'222', towLetters:'MR', threeLetters:'MRT'},
    {name:'MAURITIUS', code:'230', towLetters:'MU', threeLetters:'MUS'},
    {name:'MAYOTTE', code:'262', towLetters:'YT', threeLetters:'MYT'},
    {name:'MEXICO', code:'52', towLetters:'MX', threeLetters:'MEX'},
    {name:'MICRONESIA, FEDERATED STATES OF', code:'691', towLetters:'FM', threeLetters:'FSM'},
    {name:'MOLDOVA, REPUBLIC OF', code:'373', towLetters:'MD', threeLetters:'MDA'},
    {name:'MONACO', code:'377', towLetters:'MC', threeLetters:'MCO'},
    {name:'MONGOLIA', code:'976', towLetters:'MN', threeLetters:'MNG'},
    {name:'MONTENEGRO', code:'382', towLetters:'ME', threeLetters:'MNE'},
    {name:'MONTSERRAT', code:'1 664', towLetters:'MS', threeLetters:'MSR'},
    {name:'MOROCCO', code:'212', towLetters:'MA', threeLetters:'MAR'},
    {name:'MOZAMBIQUE', code:'258', towLetters:'MZ', threeLetters:'MOZ'},
    {name:'MYANMAR (Burma)', code:'95', towLetters:'MM', threeLetters:'MMR'},
    {name:'NAMIBIA', code:'264', towLetters:'NA', threeLetters:'NAM'},
    {name:'NAURU', code:'674', towLetters:'NR', threeLetters:'NRU'},
    {name:'NETHERLANDS', code:'31', towLetters:'NL', threeLetters:'NLD'},
    {name:'NETHERLANDS ANTILLES', code:'599', towLetters:'AN', threeLetters:'ANT'},
    {name:'NEPAL', code:'977', towLetters:'NP', threeLetters:'NPL'},
    {name:'NEW CALEDONIA', code:'687', towLetters:'NC', threeLetters:'NCL'},
    {name:'NEW ZEALAND', code:'64', towLetters:'NZ', threeLetters:'NZL'},
    {name:'NICARAGUA', code:'505', towLetters:'NI', threeLetters:'NIC'},
    {name:'NIGER', code:'227', towLetters:'NE', threeLetters:'NER'},
    {name:'NIGERIA', code:'234', towLetters:'NG', threeLetters:'NGA'},
    {name:'NIUE', code:'683', towLetters:'NU', threeLetters:'NIU'},
    {name:'NORFOLK ISLAND', code:'6723', towLetters:'NF', threeLetters:'NFK'},
    {name:'North Korea', code:'850', towLetters:'KP', threeLetters:'PRK'},
    {name:'Northern Ireland', code:'44 28', towLetters:'GB', threeLetters:'GBR'},
    {name:'Northern Mariana Islands', code:'1 670', towLetters:'MP', threeLetters:'MNP'},
    {name:'NORWAY', code:'47', towLetters:'NO', threeLetters:'NOR'},
    {name:'OMAN', code:'968', towLetters:'OM', threeLetters:'OMN'},
    {name:'PAKISTAN', code:'92', towLetters:'PK', threeLetters:'PAK'},
    {name:'PALAU', code:'680', towLetters:'PW', threeLetters:'PLW'},
    {name:'PALESTINE', code:'970', towLetters:'PA', threeLetters:'PSE'},
    {name:'PANAMA', code:'507', towLetters:'PG', threeLetters:'PAN'},
    {name:'PAPUA NEW GUINEA', code:'675', towLetters:'PY', threeLetters:'PNG'},
    {name:'PARAGUAY', code:'595', towLetters:'PE', threeLetters:'PRY'},
    {name:'PERU', code:'51', towLetters:'PH', threeLetters:'PER'},
    {name:'PHILIPPINES', code:'63', towLetters:'PN', threeLetters:'PHL'},
    {name:'POLAND', code:'48', towLetters:'PL', threeLetters:'POL'},
    {name:'PORTUGAL', code:'351', towLetters:'PT', threeLetters:'PRT'},
    {name:'PUERTO RICO', code:'1 787', towLetters:'PR', threeLetters:'PRI'},
    {name:'QATAR', code:'974', towLetters:'QA', threeLetters:'QAT'},
    {name:'REUNION', code:'262', towLetters:'RE', threeLetters:'REU'},
    {name:'ROMANIA', code:'40', towLetters:'RO', threeLetters:'ROM'},
    {name:'RUSSIAN FEDERATION', code:'7', towLetters:'RU', threeLetters:'RUS'},
    {name:'RWANDA', code:'250', towLetters:'RW', threeLetters:'RWA'},
    {name:'Saint-Barthélemy', code:'590', towLetters:'BL', threeLetters:'BLM'},
    {name:'Saint Helena', code:'290', towLetters:'SH', threeLetters:'SHN'},
    {name:'SAINT KITTS AND NEVIS', code:'1 869', towLetters:'KN', threeLetters:'KNA'},
    {name:'SAINT LUCIA', code:'1 758', towLetters:'LC', threeLetters:'LCA'},
    {name:'Saint Pierre and Miquelon', code:'508', towLetters:'PM', threeLetters:'SPM'},
    {name:'Saint Vincent and the Grenadines', code:'1 784', towLetters:'VC', threeLetters:'VCT'},
    {name:'SAMOA', code:'685', towLetters:'WS', threeLetters:'WSM'},
    {name:'SAO TOME AND PRINCIPE', code:'239', towLetters:'ST', threeLetters:'STP'},
    {name:'SAUDI ARABIA', code:'966', towLetters:'SA', threeLetters:'SAU'},
    {name:'SENEGAL', code:'221', towLetters:'SN', threeLetters:'SEN'},
    {name:'SERBIA', code:'381', towLetters:'RS', threeLetters:'SRB'},
    {name:'SEYCHELLES', code:'248', towLetters:'SC', threeLetters:'SYC'},
    {name:'SIERRA LEONE', code:'232', towLetters:'SL', threeLetters:'SLE'},
    {name:'Saint Martin', code:'1 721', towLetters:'MF', threeLetters:'MAF'},
    {name:'SINGAPORE', code:'65', towLetters:'SG', threeLetters:'SGP'},
    {name:'SLOVAKIA (Slovak Republic)', code:'421', towLetters:'SK', threeLetters:'SVK'},
    {name:'SLOVENIA', code:'386', towLetters:'SI', threeLetters:'SVN'},
    {name:'SOLOMON ISLANDS', code:'677', towLetters:'SB', threeLetters:'SLB'},
    {name:'SOMALIA', code:'252', towLetters:'SO', threeLetters:'SOM'},
    {name:'SOUTH AFRICA', code:'27', towLetters:'ZA', threeLetters:'ZAF'},
    {name:'SOUTH KOREA', code:'82', towLetters:'KR', threeLetters:'KOR'},
    {name:'SOUTH SUDAN', code:'211', towLetters:'SS', threeLetters:'SSD'},
    {name:'SPAIN', code:'34', towLetters:'ES', threeLetters:'ESP'},
    {name:'SRI LANKA', code:'94', towLetters:'LK', threeLetters:'LKA'},
    {name:'SUDAN', code:'249', towLetters:'SD', threeLetters:'SDN'},
    {name:'SURINAME', code:'597', towLetters:'SR', threeLetters:'SUR'},
    {name:'SWAZILAND', code:'268', towLetters:'SZ', threeLetters:'SWZ'},
    {name:'SWEDEN', code:'46', towLetters:'SE', threeLetters:'SWE'},
    {name:'SWITZERLAND', code:'41', towLetters:'CH', threeLetters:'CHE'},
    {name:'SYRIAN ARAB REPUBLIC', code:'963', towLetters:'SY', threeLetters:'SYR'},
    {name:'TAIWAN, PROVINCE OF CHINA', code:'886', towLetters:'TW', threeLetters:'TWN'},
    {name:'TAJIKISTAN', code:'992', towLetters:'TJ', threeLetters:'TJK'},
    {name:'TANZANIA, UNITED REPUBLIC OF', code:'255', towLetters:'TZ', threeLetters:'TZA'},
    {name:'THAILAND', code:'66', towLetters:'TH', threeLetters:'THA'},
    {name:'TOGO', code:'228', towLetters:'TG', threeLetters:'TGO'},
    {name:'TOKELAU', code:'690', towLetters:'TK', threeLetters:'TKL'},
    {name:'TONGA', code:'676', towLetters:'TO', threeLetters:'TON'},
    {name:'TRINIDAD AND TOBAGO', code:'1 868', towLetters:'TT', threeLetters:'TTO'},
    {name:'TUNISIA', code:'216', towLetters:'TN', threeLetters:'TUN'},
    {name:'TURKEY', code:'90', towLetters:'TR', threeLetters:'TUR'},
    {name:'TURKMENISTAN', code:'993', towLetters:'TM', threeLetters:'TKM'},
    {name:'TURKS AND CAICOS ISLANDS', code:'1 649', towLetters:'TC', threeLetters:'TCA'},
    {name:'TUVALU', code:'688', towLetters:'TV', threeLetters:'TUV'},
    {name:'UGANDA', code:'256', towLetters:'UG', threeLetters:'UGA'},
    {name:'UKRAINE', code:'380', towLetters:'UA', threeLetters:'UKR'},
    {name:'UNITED ARAB EMIRATES', code:'971', towLetters:'AE', threeLetters:'ARE'},
    {name:'UNITED KINGDOM', code:'44', towLetters:'GB', threeLetters:'GBR'},
    {name:'UNITED STATES', code:'1', towLetters:'US', threeLetters:'USA'},
    {name:'URUGUAY', code:'598', towLetters:'UY', threeLetters:'URY'},
    {name:'UZBEKISTAN', code:'998', towLetters:'UZ', threeLetters:'UZB'},
    {name:'VANUATU', code:'678', towLetters:'VU', threeLetters:'VUT'},
    {name:'VENEZUELA', code:'58', towLetters:'VE', threeLetters:'VEN'},
    {name:'VIET NAM', code:'84', towLetters:'VN', threeLetters:'VNM'},
    {name:'VIRGIN ISLANDS (U.S.)', code:'1 340', towLetters:'VI', threeLetters:'VIR'},
    {name:'WALLIS AND FUTUNA ISLANDS', code:'681', towLetters:'WF', threeLetters:'WLF'},
    {name:'YEMEN', code:'967', towLetters:'YE', threeLetters:'YEM'},
    {name:'ZAMBIA', code:'260', towLetters:'ZM', threeLetters:'ZMB'},
    {name:'ZIMBABWE', code:'263', towLetters:'ZW', threeLetters:'ZWE'},
    {name:'BOUVET ISLAND', code:'55', towLetters:'BV', threeLetters:'BVT'},
    {name:'CHRISTMAS ISLAND', code:'61', towLetters:'CX', threeLetters:'CXR'}];

function getInfoByCountryName(countryName, callback) {
    if(typeof countryName != "undefined"){
        for(var i = 0; i < countries.length; i++){
            if(countries[i]['name'] === countryName.toUpperCase()){
                callback(countries[i]);
                break;
            }
        }
    } else {
        callback(null);
    }
};

function getInfoByDialNumber(dialNumber, callback) {
    if(typeof dialNumber != "undefined"){
        for(var i = 0; i < countries.length; i++){
            if(countries[i]['code'] === dialNumber){
                callback(countries[i]);
                break;
            }
        }
    } else {
        callback(null);
    }
};

function getInfoByThreeLettersISO(threeLetters, callback) {
    if(typeof threeLetters != "undefined"){
        for(var i = 0; i < countries.length; i++){
            if(countries[i]['threeLetters'] === threeLetters.toUpperCase){
                callback(countries[i]);
                break;
            }
        }
    } else {
        callback(null)
    }
};


function getInfoByTwoLettersISO(twoLetters, callback) {
    if(typeof twoLetters != "undefined"){
        for(var i = 0; i < countries.length; i++){
            if(countries[i]['towLetters'] === twoLetters.toUpperCase){
                callback(countries[i]);
                break;
            }
        }
    } else {
        callback(null);
    }
};

exports.getInfoByCountryName = getInfoByCountryName;
exports.getInfoByDialNumber = getInfoByDialNumber;
exports.getInfoByThreeLettersISO = getInfoByThreeLettersISO;
exports.getInfoByTwoLettersISO = getInfoByTwoLettersISO;