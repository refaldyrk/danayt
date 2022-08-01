//This File Is For The Parameter Configuration For The Payment

function parameter(amount, name, orderid) {
	return {
		transaction_details: {
			order_id: orderid,
			gross_amount: amount,
		},
		customer_details: {
			first_name: name,
		},
		item_details: [
			{
				id: "kasyt-normal-day",
				price: 2000,
				quantity: 1,
				name: "Kas Club Yt Indonesia",
				brand: "CLUB YT INDONESIA",
				category: "Subs",
				merchant_name: "Club Yt Indonesia",
			},
		],
		enabled_payments: [
			"credit_card",
			"mandiri_clickpay",
			"cimb_clicks",
			"bca_klikbca",
			"bca_klikpay",
			"bri_epay",
			"echannel",
			"indosat_dompetku",
			"mandiri_ecash",
			"permata_va",
			"bca_va",
			"bni_va",
			"other_va",
			"gopay",
			"kioson",
			"indomaret",
			"gci",
			"danamon_online",
		],
	};
}

function parameter_weekend(amount, name, orderid) {
	return {
		transaction_details: {
			order_id: orderid,
			gross_amount: amount,
		},
		customer_details: {
			first_name: name,
		},
		item_details: [
			{
				id: "kasyt-weekend-day",
				price: 5000,
				quantity: 1,
				name: "Kas Club Yt Indonesia",
				brand: "CLUB YT INDONESIA",
				category: "Subs",
				merchant_name: "Club Yt Indonesia",
			},
		],
		enabled_payments: [
			"credit_card",
			"mandiri_clickpay",
			"cimb_clicks",
			"bca_klikbca",
			"bca_klikpay",
			"bri_epay",
			"echannel",
			"indosat_dompetku",
			"mandiri_ecash",
			"permata_va",
			"bca_va",
			"bni_va",
			"other_va",
			"gopay",
			"kioson",
			"indomaret",
			"gci",
			"danamon_online",
		],
	};
}

function parameter_monthly(amount, name, orderid) {
	return {
		transaction_details: {
			order_id: orderid,
			gross_amount: amount,
		},
		customer_details: {
			first_name: name,
		},
		item_details: [
			{
				id: "monthly-normal",
				price: 50000,
				quantity: 1,
				name: "Bulanan Club Yt Indonesia",
				brand: "CLUB YT INDONESIA",
				category: "Subs",
				merchant_name: "Club Yt Indonesia",
			},
		],
		enabled_payments: [
			"credit_card",
			"mandiri_clickpay",
			"cimb_clicks",
			"bca_klikbca",
			"bca_klikpay",
			"bri_epay",
			"echannel",
			"indosat_dompetku",
			"mandiri_ecash",
			"permata_va",
			"bca_va",
			"bni_va",
			"other_va",
			"gopay",
			"kioson",
			"indomaret",
			"gci",
			"danamon_online",
		],
	};
}

function randomString(length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

module.exports = {
	parameter,
	randomString,
	parameter_weekend,
	parameter_monthly,
};
