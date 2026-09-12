import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const REGISTRATIONS_FILE = path.join(DATA_DIR, 'registrations.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const AMBASSADORS_FILE = path.join(DATA_DIR, 'ambassadors.json');

// Initialize seed data if not present
if (!fs.existsSync(REGISTRATIONS_FILE)) {
  const initialSeed = [
    {
      id: "reg-101",
      registrationId: "ILLUM-2026-8491",
      fullName: "Arpita Mishra",
      email: "arpita.m@example.com",
      phone: "+91 98765 43210",
      college: "United Institute of Technology",
      course: "B.Tech Computer Science",
      year: "3rd Year",
      city: "Prayagraj",
      interests: ["Entrepreneurship", "Innovation", "Technology"],
      projectTitle: "AI Workflow Agent for Campus Operations",
      teamSize: "1",
      ambassadorCodeUsed: "CA26ZTBUW",
      amountPaid: 699,
      paymentStatus: "Confirmed",
      registeredAt: new Date().toISOString()
    }
  ];
  fs.writeFileSync(REGISTRATIONS_FILE, JSON.stringify(initialSeed, null, 2));
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'E-Cell UIT IlluminatE Express API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// GET Registrations
app.get('/api/registrations', (req, res) => {
  try {
    const data = fs.readFileSync(REGISTRATIONS_FILE, 'utf-8');
    res.json({ success: true, data: JSON.parse(data) });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to read registrations' });
  }
});

// POST Registration
app.post('/api/register', (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      college,
      course,
      year,
      city,
      interests,
      projectTitle,
      teamSize,
      ambassadorCode
    } = req.body;

    if (!fullName || !email || !phone || !college) {
      return res.status(400).json({ success: false, message: 'Missing required attendee fields.' });
    }

    const isCodeValid = (ambassadorCode || '').trim().toUpperCase() === 'CA26ZTBUW';
    const originalPrice = 799;
    const discount = isCodeValid ? 100 : 0;
    const finalPrice = originalPrice - discount;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newRecord = {
      id: 'reg-' + Date.now(),
      registrationId: `ILLUM-2026-${randomSuffix}`,
      fullName,
      email,
      phone,
      college,
      course: course || 'B.Tech',
      year: year || '1st Year',
      city: city || 'Prayagraj',
      interests: interests || ['Entrepreneurship'],
      projectTitle: projectTitle || '',
      teamSize: teamSize || '1',
      ambassadorCodeUsed: isCodeValid ? 'CA26ZTBUW' : '',
      amountPaid: finalPrice,
      paymentStatus: 'Confirmed',
      registeredAt: new Date().toISOString()
    };

    const fileData = fs.existsSync(REGISTRATIONS_FILE)
      ? JSON.parse(fs.readFileSync(REGISTRATIONS_FILE, 'utf-8'))
      : [];
    fileData.unshift(newRecord);
    fs.writeFileSync(REGISTRATIONS_FILE, JSON.stringify(fileData, null, 2));

    res.status(201).json({
      success: true,
      message: 'Registration confirmed successfully',
      data: newRecord
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error processing registration' });
  }
});

// POST Contact Message
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const msg = {
      id: 'msg-' + Date.now(),
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      receivedAt: new Date().toISOString()
    };

    const list = fs.existsSync(CONTACTS_FILE) ? JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8')) : [];
    list.unshift(msg);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(list, null, 2));

    res.json({ success: true, message: 'Inquiry received by E-Cell UIT secretariat.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit contact message.' });
  }
});

// POST Ambassador Application
app.post('/api/ambassador', (req, res) => {
  try {
    const { name, college, email, phone } = req.body;
    const record = {
      id: 'ca-' + Date.now(),
      name,
      college,
      email,
      phone,
      appliedAt: new Date().toISOString()
    };

    const list = fs.existsSync(AMBASSADORS_FILE) ? JSON.parse(fs.readFileSync(AMBASSADORS_FILE, 'utf-8')) : [];
    list.unshift(record);
    fs.writeFileSync(AMBASSADORS_FILE, JSON.stringify(list, null, 2));

    res.json({ success: true, message: 'Campus Ambassador application registered.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit ambassador application.' });
  }
});

app.listen(PORT, () => {
  console.log(`⚡ E-Cell UIT Express Backend running on http://localhost:${PORT}`);
});
