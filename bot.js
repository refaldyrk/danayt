//Module
const { Telegraf } = require("telegraf");
const midtransClient = require("midtrans-client");
const param = require("./param/param.js");
const { env } = require("./load.js");
const TgFancy = require("tgfancy");
const txt = require("./texts/txt.js");
const app = require("express")();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

//Port
const port = 8080;

//Configure Area
//Configure Midtrans Client
let snap = new midtransClient.Snap({
	isProduction: false,
	serverKey: env().SERVER_KEY,
	clientKey: env().CLIENT_KEY,
});

//Configure Telegram Bot
const bot = new Telegraf(env().API_BOT);

//Configure Telegram Bot
const invoiceBot = new TgFancy(env().API_BOT);

//Server Area
app.use(jsonParser);

app.post("/notif", jsonParser, (req, res) => {
	var body = req.body;

	var arrId = body.order_id.split("-");
	var id = arrId[1];

	invoiceBot
		.sendMessage(
			id,
			txt.invoice_txt(
				body.order_id,
				body.payment_type,
				body.gross_amount,
				body.transaction_status,
				body.transaction_id,
				body.transaction_time,
			),
		)
		.then(m => {
			console.log("Succcess");
		})
		.catch(e => {
			console.log(e);
		});

	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

//BOT AREA
bot.start(ctx => ctx.replyWithHTML(txt.start_txt(ctx.from.first_name)));

bot.help(ctx => ctx.replyWithHTML(txt.help_txt(ctx.from.first_name)));

bot.command("kas", ctx => {
	ctx.replyWithHTML(txt.wait_txt());

	snap
		.createTransaction(
			param.parameter(
				2000,
				ctx.from.first_name,
				ctx.from.first_name + "-" + ctx.from.id + "-" + param.randomString(5),
			),
		)
		.then(transaction => {
			// transaction redirect url
			let transactionRedirectUrl = transaction.redirect_url;

			ctx.replyWithHTML(
				`<a href="${transactionRedirectUrl}">Klik untuk melakukan pembayaran</a>`,
			);
		})
		.catch(e => {
			console.log("Error occured:", e.message);
			ctx.reply("Try Again...");
		});
});

bot.command("weekend", ctx => {
	ctx.replyWithHTML(txt.wait_txt());

	snap
		.createTransaction(
			param.parameter_weekend(
				5000,
				ctx.from.first_name,
				ctx.from.first_name + "-" + ctx.from.id + "-" + param.randomString(5),
			),
		)
		.then(transaction => {
			// transaction redirect url
			let transactionRedirectUrl = transaction.redirect_url;

			ctx.replyWithHTML(
				`<a href="${transactionRedirectUrl}">Klik untuk melakukan pembayaran</a>`,
			);
		})
		.catch(e => {
			console.log("Error occured:", e.message);
			ctx.reply("Try Again...");
		});
});

bot.command("bulanan", ctx => {
	ctx.replyWithHTML(txt.wait_txt());

	snap
		.createTransaction(
			param.parameter_monthly(
				50000,
				ctx.from.first_name,
				ctx.from.first_name + "-" + ctx.from.id + "-" + param.randomString(5),
			),
		)
		.then(transaction => {
			// transaction redirect url
			let transactionRedirectUrl = transaction.redirect_url;
			ctx.replyWithHTML(
				`<a href="${transactionRedirectUrl}">Klik untuk melakukan pembayaran</a>`,
			);
		})
		.catch(e => {
			console.log("Error occured:", e.message);
			ctx.reply("Try Again...");
		});
});

console.log("Bot is running...");
bot.launch();
