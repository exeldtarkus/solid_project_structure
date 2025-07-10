# 🧱 Express TypeScript Clean Architecture

Project ini menggunakan arsitektur modular dan prinsip SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) untuk membangun aplikasi backend yang scalable dan maintainable menggunakan Express dan TypeScript.

---

## 📁 Struktur Folder

```
src/
├── config/           # Konfigurasi global (env, logger, DB connection)
├── controllers/      # Endpoint handler (req/res), tipis, hanya delegasi ke service
├── database/         # Setup DB & migration (Knex, Sequelize, Prisma)
├── helpers/          # Fungsi utilitas stateless (BaseResponder, formatter, etc.)
├── integrations/     # Integrasi eksternal: Kafka, Redis, API eksternal
├── interfaces/       # Interface untuk kontrak antar layer (service ↔ repo)
├── middlewares/      # Middleware Express (auth, logger, requestId, validate, etc.)
├── models/           # Domain entity model (bisa schema, type, atau logic bisnis ringan)
├── repositories/     # Akses database (implements interface), DAO layer
├── routes/           # Definisi route Express, modular per fitur
├── services/         # Business logic utama (Application layer)
├── types/
│   ├── dto/          # Data Transfer Object (input request bentuk & validasi)
│   ├── enums/        # Enum global (status code, roles, dsb)
│   ├── express/      # Custom typing untuk Express (e.g. RequestWithUser)
│   └── response/     # Struktur standard response (IBaseResponse, etc.)
└── utils/            # Tools stateless seperti generator ID, time helper, dll
```

---

## 🧠 Prinsip Arsitektur

- ✅ **SOLID**: Semua service dan repository mematuhi prinsip dependency inversion
- ✅ **Interface-first**: Gunakan interface untuk mendefinisikan kontrak antar lapisan
- ✅ **Modular**: Setiap domain bisa diatur per folder secara independen
- ✅ **Testable**: Mudah dilakukan unit testing karena semua dependensi dapat di-mock

---

## 🚀 Jalankan Aplikasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build TypeScript
npm run build

# Jalankan hasil build
npm start
```

---

## 🤝 Kontribusi

Struktur ini cocok untuk digunakan pada skala kecil hingga besar, serta dapat dikembangkan lebih lanjut dengan DI Container seperti `tsyringe` atau `inversify`.

Silakan fork, sesuaikan, dan gunakan untuk projek kamu sendiri 🚀
