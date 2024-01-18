// import { Schema, model } from  "mongoose";
//
// export interface UserDocument extends Document {
// 	email: string,
// 	username: string,
// 	password: string,
//
// 	// TODO: Add it later
// 	// registerDate: Date,
// 	// updateDate: Date,
// 	// telegramID: string,
// 	// heroesID: string
// }
//
// const UserSchema = new Schema({
// 	email: {
// 		type: String,
// 		required: true,
// 		unique: true,
// 		trim: true,
// 		lowercase: true
// 	},
// 	username: {
// 		type: String,
// 		required: true,
// 		unique: true,
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 		unique: true,
// 		length: [8, 'Пароль повинен містити не менше 8 символів']
// 	},
//
// 	// TODO: Add it later
// 	// registerDate: {
// 	// 	type: Date,
// 	// 	required: false,
// 	// 	unique: false,
// 	// },
// 	// updateDate: {
// 	// 	type: Date,
// 	// 	required: false,
// 	// 	unique: false,
// 	// },
// 	// telegramID: {
// 	// 	type: String,
// 	// 	required: false,
// 	// 	unique: true,
// 	// 	trim: true
// 	// },
// 	// heroesID: {
// 	// 	type: String,
// 	// 	required: false,
// 	// 	unique: true,
// 	// 	trim: true
// 	// },
// })
//
// export const User = model<UserDocument>('User', UserSchema);