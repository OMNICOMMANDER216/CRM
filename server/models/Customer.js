const mongoose = require('mongoose');
  let Schema = mongoose.Schema;

  let CustomerSchema = new Schema({
    name: {
        type: String
    },
    url: {
        type: String
    },
    status: {
        type: String,
          enum: ["Signed", "Deposit", "Assigned", "QA","DNS", "Live", "Idle", "FinalInvoice"]
    },
    kickoffDate: {
        type: String
    },
    finalChangesDate: {
        type: String
    },
    goLiveDate: {
        type: String
    },
    deposit: {
      type: Boolean,
      default: false
    },
    finalPayment: {
      type: Boolean,
      default: false
    },
    contact: {
      contactName: String,
      contactEmail: String,
      contactNumber: String,
      contactLocation: String
    },
    notes: [
        {
          date: {
            type: Date,
            default: Date.now
          },
          note: String
        }      
    ],
    log: [
      {
        status: {
          type: String,
          enum: ["Signed", "Deposit", "Assigned", "QA","DNS", "Live", "Idle", "FinalInvoice"]
        },
        time: Date
      }
    ],
    services: [
      {
          type: String,
          enum: ["website", "social-media", "email", "live-chat", "branding", "promet", "form-stack", "logo", "digital-signage", "domain"]
      }
    ],
    pdfs: {
        type: String
    },
    pm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    dev: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    compliance: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    QA: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true}
);

  //Create Collection and add Schema
  mongoose.model('Customer', CustomerSchema);
