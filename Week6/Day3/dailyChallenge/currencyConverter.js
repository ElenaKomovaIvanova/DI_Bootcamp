
const currencies = [
    { code: 'AED', name: 'UAE Dirham - AED', country: 'United Arab Emirates' },
    { code: 'AFN', name: 'Afghan Afghani - AFN', country: 'Afghanistan' },
    { code: 'ALL', name: 'Albanian Lek - ALL', country: 'Albania' },
    { code: 'AMD', name: 'Armenian Dram - AMD', country: 'Armenia' },
    { code: 'ANG', name: 'Netherlands Antillian Guilder - ANG', country: 'Netherlands Antilles' },
    { code: 'AOA', name: 'Angolan Kwanza - AOA', country: 'Angola' },
    { code: 'ARS', name: 'Argentine Peso - ARS', country: 'Argentina' },
    { code: 'AUD', name: 'Australian Dollar - AUD', country: 'Australia' },
    { code: 'AWG', name: 'Aruban Florin - AWG', country: 'Aruba' },
    { code: 'AZN', name: 'Azerbaijani Manat - AZN', country: 'Azerbaijan' },
    { code: 'BAM', name: 'Bosnia and Herzegovina Mark - BAM', country: 'Bosnia and Herzegovina' },
    { code: 'BBD', name: 'Barbados Dollar - BBD', country: 'Barbados' },
    { code: 'BDT', name: 'Bangladeshi Taka - BDT', country: 'Bangladesh' },
    { code: 'BGN', name: 'Bulgarian Lev - BGN', country: 'Bulgaria' },
    { code: 'BHD', name: 'Bahraini Dinar - BHD', country: 'Bahrain' },
    { code: 'BIF', name: 'Burundian Franc - BIF', country: 'Burundi' },
    { code: 'BMD', name: 'Bermudian Dollar - BMD', country: 'Bermuda' },
    { code: 'BND', name: 'Brunei Dollar - BND', country: 'Brunei' },
    { code: 'BOB', name: 'Bolivian Boliviano - BOB', country: 'Bolivia' },
    { code: 'BRL', name: 'Brazilian Real - BRL', country: 'Brazil' },
    { code: 'BSD', name: 'Bahamian Dollar - BSD', country: 'Bahamas' },
    { code: 'BTN', name: 'Bhutanese Ngultrum - BTN', country: 'Bhutan' },
    { code: 'BWP', name: 'Botswana Pula - BWP', country: 'Botswana' },
    { code: 'BYN', name: 'Belarusian Ruble - BYN', country: 'Belarus' },
    { code: 'BZD', name: 'Belize Dollar - BZD', country: 'Belize' },
    { code: 'CAD', name: 'Canadian Dollar - CAD', country: 'Canada' },
    { code: 'CDF', name: 'Congolese Franc - CDF', country: 'Democratic Republic of the Congo' },
    { code: 'CHF', name: 'Swiss Franc - CHF', country: 'Switzerland' },
    { code: 'CLP', name: 'Chilean Peso - CLP', country: 'Chile' },
    { code: 'CNY', name: 'Chinese Renminbi - CNY', country: 'China' },
    { code: 'COP', name: 'Colombian Peso - COP', country: 'Colombia' },
    { code: 'CRC', name: 'Costa Rican Colon - CRC', country: 'Costa Rica' },
    { code: 'CUP', name: 'Cuban Peso - CUP', country: 'Cuba' },
    { code: 'CVE', name: 'Cape Verdean Escudo - CVE', country: 'Cape Verde' },
    { code: 'CZK', name: 'Czech Koruna - CZK', country: 'Czech Republic' },
    { code: 'DJF', name: 'Djiboutian Franc - DJF', country: 'Djibouti' },
    { code: 'DKK', name: 'Danish Krone - DKK', country: 'Denmark' },
    { code: 'DOP', name: 'Dominican Peso - DOP', country: 'Dominican Republic' },
    { code: 'DZD', name: 'Algerian Dinar - DZD', country: 'Algeria' },
    { code: 'EGP', name: 'Egyptian Pound - EGP', country: 'Egypt' },
    { code: 'ERN', name: 'Eritrean Nakfa - ERN', country: 'Eritrea' },
    { code: 'ETB', name: 'Ethiopian Birr - ETB', country: 'Ethiopia' },
    { code: 'EUR', name: 'Euro - EUR', country: 'European Union' },
    { code: 'FJD', name: 'Fiji Dollar - FJD', country: 'Fiji' },
    { code: 'FKP', name: 'Falkland Islands Pound - FKP', country: 'Falkland Islands' },
    { code: 'FOK', name: 'Faroese Króna - FOK', country: 'Faroe Islands' },
    { code: 'GBP', name: 'Pound Sterling - GBP', country: 'United Kingdom' },
    { code: 'GEL', name: 'Georgian Lari - GEL', country: 'Georgia' },
    { code: 'GGP', name: 'Guernsey Pound - GGP', country: 'Guernsey' },
    { code: 'GHS', name: 'Ghanaian Cedi - GHS', country: 'Ghana' },
    { code: 'GIP', name: 'Gibraltar Pound - GIP', country: 'Gibraltar' },
    { code: 'GMD', name: 'Gambian Dalasi - GMD', country: 'The Gambia' },
    { code: 'GNF', name: 'Guinean Franc - GNF', country: 'Guinea' },
    { code: 'GTQ', name: 'Guatemalan Quetzal - GTQ', country: 'Guatemala' },
    { code: 'GYD', name: 'Guyanese Dollar - GYD', country: 'Guyana' },
    { code: 'HKD', name: 'Hong Kong Dollar - HKD', country: 'Hong Kong' },
    { code: 'HNL', name: 'Honduran Lempira - HNL', country: 'Honduras' },
    { code: 'HRK', name: 'Croatian Kuna - HRK', country: 'Croatia' },
    { code: 'HTG', name: 'Haitian Gourde - HTG', country: 'Haiti' },
    { code: 'HUF', name: 'Hungarian Forint - HUF', country: 'Hungary' },
    { code: 'IDR', name: 'Indonesian Rupiah - IDR', country: 'Indonesia' },
    { code: 'ILS', name: 'Israeli New Shekel - ILS', country: 'Israel' },
    { code: 'IMP', name: 'Manx Pound - IMP', country: 'Isle of Man' },
    { code: 'INR', name: 'Indian Rupee - INR', country: 'India' },
    { code: 'IQD', name: 'Iraqi Dinar - IQD', country: 'Iraq' },
    { code: 'IRR', name: 'Iranian Rial - IRR', country: 'Iran' },
    { code: 'ISK', name: 'Icelandic Króna - ISK', country: 'Iceland' },
    { code: 'JEP', name: 'Jersey Pound - JEP', country: 'Jersey' },
    { code: 'JMD', name: 'Jamaican Dollar - JMD', country: 'Jamaica' },
    { code: 'JOD', name: 'Jordanian Dinar - JOD', country: 'Jordan' },
    { code: 'JPY', name: 'Japanese Yen - JPY', country: 'Japan' },
    { code: 'KES', name: 'Kenyan Shilling - KES', country: 'Kenya' },
    { code: 'KGS', name: 'Kyrgyzstani Som - KGS', country: 'Kyrgyzstan' },
    { code: 'KHR', name: 'Cambodian Riel - KHR', country: 'Cambodia' },
    { code: 'KID', name: 'Kiribati Dollar - KID', country: 'Kiribati' },
    { code: 'KMF', name: 'Comorian Franc - KMF', country: 'Comoros' },
    { code: 'KRW', name: 'South Korean Won - KRW', country: 'South Korea' },
    { code: 'KWD', name: 'Kuwaiti Dinar - KWD', country: 'Kuwait' },
    { code: 'KYD', name: 'Cayman Islands Dollar - KYD', country: 'Cayman Islands' },
    { code: 'KZT', name: 'Kazakhstani Tenge - KZT', country: 'Kazakhstan' },
    { code: 'LAK', name: 'Laotian Kip - LAK', country: 'Laos' },
    { code: 'LBP', name: 'Lebanese Pound - LBP', country: 'Lebanon' },
    { code: 'LKR', name: 'Sri Lankan Rupee - LKR', country: 'Sri Lanka' },
    { code: 'LRD', name: 'Liberian Dollar - LRD', country: 'Liberia' },
    { code: 'LSL', name: 'Lesotho Loti - LSL', country: 'Lesotho' },
    { code: 'LYD', name: 'Libyan Dinar - LYD', country: 'Libya' },
    { code: 'MAD', name: 'Moroccan Dirham - MAD', country: 'Morocco' },
    { code: 'MDL', name: 'Moldovan Leu - MDL', country: 'Moldova' },
    { code: 'MGA', name: 'Malagasy Ariary - MGA', country: 'Madagascar' },
    { code: 'MKD', name: 'Macedonian Denar - MKD', country: 'North Macedonia' },
    { code: 'MMK', name: 'Burmese Kyat - MMK', country: 'Myanmar' },
    { code: 'MNT', name: 'Mongolian Tögrög - MNT', country: 'Mongolia' },
    { code: 'MOP', name: 'Macanese Pataca - MOP', country: 'Macau' },
    { code: 'MRU', name: 'Mauritanian Ouguiya - MRU', country: 'Mauritania' },
    { code: 'MUR', name: 'Mauritian Rupee - MUR', country: 'Mauritius' },
    { code: 'MVR', name: 'Maldivian Rufiyaa - MVR', country: 'Maldives' },
    { code: 'MWK', name: 'Malawian Kwacha - MWK', country: 'Malawi' },
    { code: 'MXN', name: 'Mexican Peso - MXN', country: 'Mexico' },
    { code: 'MYR', name: 'Malaysian Ringgit - MYR', country: 'Malaysia' },
    { code: 'MZN', name: 'Mozambican Metical - MZN', country: 'Mozambique' },
    { code: 'NAD', name: 'Namibian Dollar - NAD', country: 'Namibia' },
    { code: 'NGN', name: 'Nigerian Naira - NGN', country: 'Nigeria' },
    { code: 'NIO', name: 'Nicaraguan Córdoba - NIO', country: 'Nicaragua' },
    { code: 'NOK', name: 'Norwegian Krone - NOK', country: 'Norway' },
    { code: 'NPR', name: 'Nepalese Rupee - NPR', country: 'Nepal' },
    { code: 'NZD', name: 'New Zealand Dollar - NZD', country: 'New Zealand' },
    { code: 'OMR', name: 'Omani Rial - OMR', country: 'Oman' },
    { code: 'PAB', name: 'Panamanian Balboa - PAB', country: 'Panama' },
    { code: 'PEN', name: 'Peruvian Sol - PEN', country: 'Peru' },
    { code: 'PGK', name: 'Papua New Guinean Kina - PGK', country: 'Papua New Guinea' },
    { code: 'PHP', name: 'Philippine Peso - PHP', country: 'Philippines' },
    { code: 'PKR', name: 'Pakistani Rupee - PKR', country: 'Pakistan' },
    { code: 'PLN', name: 'Polish Złoty - PLN', country: 'Poland' },
    { code: 'PYG', name: 'Paraguayan Guaraní - PYG', country: 'Paraguay' },
    { code: 'QAR', name: 'Qatari Riyal - QAR', country: 'Qatar' },
    { code: 'RON', name: 'Romanian Leu - RON', country: 'Romania' },
    { code: 'RSD', name: 'Serbian Dinar - RSD', country: 'Serbia' },
    { code: 'RUB', name: 'Russian Ruble - RUB', country: 'Russia' },
    { code: 'RWF', name: 'Rwandan Franc - RWF', country: 'Rwanda' },
    { code: 'SAR', name: 'Saudi Riyal - SAR', country: 'Saudi Arabia' },
    { code: 'SBD', name: 'Solomon Islands Dollar - SBD', country: 'Solomon Islands' },
    { code: 'SCR', name: 'Seychellois Rupee - SCR', country: 'Seychelles' },
    { code: 'SDG', name: 'Sudanese Pound - SDG', country: 'Sudan' },
    { code: 'SEK', name: 'Swedish Krona - SEK', country: 'Sweden' },
    { code: 'SGD', name: 'Singapore Dollar - SGD', country: 'Singapore' },
    { code: 'SHP', name: 'Saint Helena Pound - SHP', country: 'Saint Helena' },
    { code: 'SLE', name: 'Sierra Leonean Leone - SLE', country: 'Sierra Leone' },
    { code: 'SOS', name: 'Somali Shilling - SOS', country: 'Somalia' },
    { code: 'SRD', name: 'Surinamese Dollar - SRD', country: 'Suriname' },
    { code: 'SSP', name: 'South Sudanese Pound - SSP', country: 'South Sudan' },
    { code: 'STN', name: 'São Tomé and Príncipe Dobra - STN', country: 'São Tomé and Príncipe' },
    { code: 'SYP', name: 'Syrian Pound - SYP', country: 'Syria' },
    { code: 'SZL', name: 'Eswatini Lilangeni - SZL', country: 'Eswatini' },
    { code: 'THB', name: 'Thai Baht - THB', country: 'Thailand' },
    { code: 'TJS', name: 'Tajikistani Somoni - TJS', country: 'Tajikistan' },
    { code: 'TMT', name: 'Turkmenistan Manat - TMT', country: 'Turkmenistan' },
    { code: 'TND', name: 'Tunisian Dinar - TND', country: 'Tunisia' },
    { code: 'TOP', name: 'Tongan Paʻanga - TOP', country: 'Tonga' },
    { code: 'TRY', name: 'Turkish Lira - TRY', country: 'Turkey' },
    { code: 'TTD', name: 'Trinidad and Tobago Dollar - TTD', country: 'Trinidad and Tobago' },
    { code: 'TVD', name: 'Tuvaluan Dollar - TVD', country: 'Tuvalu' },
    { code: 'TWD', name: 'New Taiwan Dollar - TWD', country: 'Taiwan' },
    { code: 'TZS', name: 'Tanzanian Shilling - TZS', country: 'Tanzania' },
    { code: 'UAH', name: 'Ukrainian Hryvnia - UAH', country: 'Ukraine' },
    { code: 'UGX', name: 'Ugandan Shilling - UGX', country: 'Uganda' },
    { code: 'USD', name: 'United States Dollar - USD', country: 'United States' },
    { code: 'UYU', name: 'Uruguayan Peso - UYU', country: 'Uruguay' },
    { code: 'UZS', name: 'Uzbekistani So\'m - UZS', country: 'Uzbekistan' },
    { code: 'VES', name: 'Venezuelan Bolívar Soberano - VES', country: 'Venezuela' },
    { code: 'VND', name: 'Vietnamese Đồng - VND', country: 'Vietnam' },
    { code: 'VUV', name: 'Vanuatu Vatu - VUV', country: 'Vanuatu' },
    { code: 'WST', name: 'Samoan Tālā - WST', country: 'Samoa' },
    { code: 'XAF', name: 'Central African CFA Franc - XAF', country: 'CEMAC' },
    { code: 'XCD', name: 'East Caribbean Dollar - XCD', country: 'Organisation of Eastern Caribbean States' },
    { code: 'XDR', name: 'Special Drawing Rights - XDR', country: 'International Monetary Fund' },
    { code: 'XOF', name: 'West African CFA franc - XOF', country: 'UEMOA' },
    { code: 'XPF', name: 'CFP Franc - XPF', country: 'French Polynesia' },
    { code: 'YER', name: 'Yemeni Rial - YER', country: 'Yemen' },
    { code: 'ZAR', name: 'South African Rand - ZAR', country: 'South Africa' },
    { code: 'ZMW', name: 'Zambian Kwacha - ZMW', country: 'Zambia' },
    { code: 'ZWL', name: 'Zimbabwean Dollar - ZWL', country: 'Zimbabwe' }
];

const url = 'https://v6.exchangerate-api.com/v6/';
const key = 'cc9e27d8f267e48f2f293f36';

function populateSelect(currency, options) {
    const selectElement = document.getElementById(currency);
    selectElement.innerHTML = '';

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.code;
        optionElement.textContent = option.name;
        selectElement.appendChild(optionElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateSelect('currencyFrom', currencies);
    populateSelect('currencyTo', currencies);
});

function renderAmount(rate) {
    const resultInput = document.getElementById('result');
    resultInput.value = rate.conversion_result;
}

async function getExchangeRate(event) {
    event.preventDefault();
    const amountInput = document.getElementById('amount').value;
    const currencyFrom = document.getElementById('currencyFrom').value;
    const currencyTo = document.getElementById('currencyTo').value;

    if (!amountInput || isNaN(amountInput) || amountInput <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (!currencyFrom || !currencyTo) {
        alert('Please select both currencies');
        return;
    }

    try {
        const response = await fetch(`${url}${key}/pair/${currencyFrom}/${currencyTo}/${amountInput}`);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        renderAmount(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('myForm').addEventListener('submit', getExchangeRate);