## نظرة عامة
| عنوان | القيمة |
| --- | --- |
| اسم المشروع | منصة مقود |
| نوع المشروع | منصة خدمات السيارات |
| مدة MVP | 12 Sprint ( أسبوع / 6 أشهر) |
| مدة كل Sprint | أسبوعين |
| Backend Developer .NET | 2 |
| Frontend React Developer | 2 |
| UI/UX Designer | 1 |
| QA Tester | 1 |
| DevOps / Backend Support | 1 (جزئي) |
| Project Manager / Tech Lead | 1 |
| إجمالي الفريق | 8 أعضاء |

## نطاق MVP
| النوع | الميزة | الحالة |
| --- | --- | --- |
| MVP | تسجيل العملاء ومقدمي الخدمة | Must Have |
| MVP | إدارة المركبات | Must Have |
| MVP | استعراض الخدمات ومقدمي الخدمة | Must Have |
| MVP | إنشاء طلب خدمة | Must Have |
| MVP | إرسال عروض أسعار من مقدمي الخدمة | Must Have |
| MVP | قبول العرض من العميل | Must Have |
| MVP | تتبع حالة الطلب | Must Have |
| MVP | الدفع الأساسي / المحفظة | Must Have |
| MVP | التقييم | Must Have |
| MVP | لوحة إدارة بسيطة | Must Have |
| MVP | إشعارات أساسية | Must Have |
| MVP | رفع صور ومستندات | Must Have |
| Later | الذكاء الاصطناعي لتقدير الحوادث | Later |
| Later | OCR لمستندات التأمين | Later |
| Later | مقارنة وشراء التأمين | Later |
| Later | المتجر الإلكتروني لقطع الغيار | Later |
| Later | نظام النزاعات المتقدم | Later |
| Later | تتبع السائق المباشر كل 5 ثوانٍ | Later |
| Later | Elasticsearch | Later |
| Later | تقارير مالية متقدمة | Later |

## السبرنتات
| Sprint | الهدف | الفئة | المهمة | الوصف |
| --- | --- | --- | --- | --- |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد Solution | إنشاء ASP.NET Core Web API Solution |
| Sprint 0 | التحضير والتحليل التقني | Backend | اختيار المعمارية | Clean Architecture: API, Application, Domain, Infrastructure |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد EF Core | ربط Server SQL + PostGIS إن توفر |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد Authentication Structure | تجهيز JWT, Refresh Token, OTP structure |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد Base Entities | BaseEntity, AuditableEntity, SoftDelete |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد Result Pattern | Result<T>, ErrorResponse, Pagination |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد Swagger | توثيق API |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد Docker Compose | API + Sql Server + Redis + MinIO |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد Logging | Serilog |
| Sprint 0 | التحضير والتحليل التقني | Backend | إعداد Global Exception Handler | معالجة موحدة للأخطاء |
| Sprint 0 | التحضير والتحليل التقني | Frontend | إنشاء React App | React + Vite + TypeScript |
| Sprint 0 | التحضير والتحليل التقني | Frontend | إعداد Routing | React Router |
| Sprint 0 | التحضير والتحليل التقني | Frontend | إعداد State Management | Zustand أو Redux Toolkit |
| Sprint 0 | التحضير والتحليل التقني | Frontend | إعداد API Client | Axios مع Interceptors |
| Sprint 0 | التحضير والتحليل التقني | Frontend | إعداد Auth Guard | Protected Routes |
| Sprint 0 | التحضير والتحليل التقني | Frontend | إعداد UI Library | Tailwind + shadcn/ui أو MUI |
| Sprint 0 | التحضير والتحليل التقني | Frontend | إعداد Folder Structure | modules-based structure |
| Sprint 0 | التحضير والتحليل التقني | UI/UX | تحليل المستخدمين | Customer, Provider, Driver, Admin |
| Sprint 0 | التحضير والتحليل التقني | UI/UX | إعداد Design System | Colors, Typography, Buttons, Inputs |
| Sprint 0 | التحضير والتحليل التقني | UI/UX | إعداد Wireframes أولية | Auth, Dashboard, Orders |
| Sprint 0 | التحضير والتحليل التقني | UI/UX | إعداد User Flow | Flow حجز خدمة، عرض سعر، قبول عرض |
| Sprint 1 | Authentication & Users | Backend | Entity: User | إنشاء جدول المستخدمين |
| Sprint 1 | Authentication & Users | Backend | Entity: UserDocument | مستندات المستخدم |
| Sprint 1 | Authentication & Users | Backend | Entity: UserAddress | عناوين المستخدم |
| Sprint 1 | Authentication & Users | Backend | Auth Register API | POST /auth/register |
| Sprint 1 | Authentication & Users | Backend | Verify OTP API | POST /auth/verify-otp |
| Sprint 1 | Authentication & Users | Backend | Refresh Token API | POST /auth/refresh-token |
| Sprint 1 | Authentication & Users | Backend | Current User API | GET /users/me |
| Sprint 1 | Authentication & Users | Backend | Update Profile API | PUT /users/me |
| Sprint 1 | Authentication & Users | Backend | Upload Avatar API | رفع صورة المستخدم |
| Sprint 1 | Authentication & Users | Backend | Roles | customer, provider, driver, admin |
| Sprint 1 | Authentication & Users | Backend | Authorization Policies | صلاحيات حسب الدور |
| Sprint 1 | Authentication & Users | Backend | Seed Admin User | إنشاء مسؤول افتراضي |
| Sprint 1 | Authentication & Users | Frontend | Login Page | إدخال رقم الجوال |
| Sprint 1 | Authentication & Users | Frontend | OTP Page | التحقق من الرمز |
| Sprint 1 | Authentication & Users | Frontend | Register Profile Page | إكمال بيانات المستخدم |
| Sprint 1 | Authentication & Users | Frontend | Auth Store | حفظ token وبيانات المستخدم |
| Sprint 1 | Authentication & Users | Frontend | Protected Layout | منع الدخول بدون تسجيل |
| Sprint 1 | Authentication & Users | Frontend | Profile Page | عرض وتعديل الملف الشخصي |
| Sprint 1 | Authentication & Users | UI/UX | Login | تصميم صفحة الدخول |
| Sprint 1 | Authentication & Users | UI/UX | OTP Verification | تصميم إدخال OTP |
| Sprint 1 | Authentication & Users | UI/UX | Complete Profile | بيانات الاسم والبريد |
| Sprint 1 | Authentication & Users | UI/UX | User Profile | الملف الشخصي |
| Sprint 1 | Authentication & Users | UI/UX | Empty/Error States | حالات الخطأ والتحميل |
| Sprint 2 | Vehicles Module | Backend | Entity: VehicleBrand | ماركات المركبات |
| Sprint 2 | Vehicles Module | Backend | Entity: VehicleModel | موديلات المركبات |
| Sprint 2 | Vehicles Module | Backend | Entity: Vehicle | مركبات المستخدم |
| Sprint 2 | Vehicles Module | Backend | Entity: MaintenanceHistory | سجل الصيانة |
| Sprint 2 | Vehicles Module | Backend | GET /brands | جلب الماركات |
| Sprint 2 | Vehicles Module | Backend | GET /brands/:id/models | جلب الموديلات |
| Sprint 2 | Vehicles Module | Backend | POST /vehicles | إضافة مركبة |
| Sprint 2 | Vehicles Module | Backend | GET /vehicles | قائمة مركباتي |
| Sprint 2 | Vehicles Module | Backend | GET /vehicles/:id | تفاصيل مركبة |
| Sprint 2 | Vehicles Module | Backend | PUT /vehicles/:id | تعديل مركبة |
| Sprint 2 | Vehicles Module | Backend | DELETE /vehicles/:id | حذف منطقي |
| Sprint 2 | Vehicles Module | Backend | Validation | رقم الشاصي، السنة، اللوحة |
| Sprint 2 | Vehicles Module | Backend | Seed Data | ماركات وموديلات أولية |
| Sprint 2 | Vehicles Module | Frontend | Vehicles List Page | قائمة مركباتي |
| Sprint 2 | Vehicles Module | Frontend | Add Vehicle Page | إضافة مركبة |
| Sprint 2 | Vehicles Module | Frontend | Edit Vehicle Page | تعديل مركبة |
| Sprint 2 | Vehicles Module | Frontend | Vehicle Details Page | تفاصيل المركبة |
| Sprint 2 | Vehicles Module | Frontend | Brand/Model Dropdowns | قوائم مترابطة |
| Sprint 2 | Vehicles Module | Frontend | Maintenance History UI | عرض سجل الصيانة |
| Sprint 2 | Vehicles Module | UI/UX | My Vehicles | كروت للمركبات |
| Sprint 2 | Vehicles Module | UI/UX | Add Vehicle Form | نموذج إضافة مركبة |
| Sprint 2 | Vehicles Module | UI/UX | Vehicle Details | صفحة التفاصيل |
| Sprint 2 | Vehicles Module | UI/UX | Maintenance Timeline | Timeline للصيانة |
| Sprint 3 | Services Catalog & Provider Registration | Backend | Entity: ServiceProvider | مقدم الخدمة |
| Sprint 3 | Services Catalog & Provider Registration | Backend | Entity: ServiceCategory | فئات الخدمات |
| Sprint 3 | Services Catalog & Provider Registration | Backend | Entity: ServiceSubcategory | الخدمات الفرعية |
| Sprint 3 | Services Catalog & Provider Registration | Backend | Entity: ProviderService | خدمات مقدم الخدمة |
| Sprint 3 | Services Catalog & Provider Registration | Backend | Entity: ProviderWorkingDay | أيام العمل |
| Sprint 3 | Services Catalog & Provider Registration | Backend | POST /providers/register | تسجيل مقدم خدمة |
| Sprint 3 | Services Catalog & Provider Registration | Backend | GET /services/categories | فئات الخدمات |
| Sprint 3 | Services Catalog & Provider Registration | Backend | GET /services/categories/:id/subcategories | الخدمات الفرعية |
| Sprint 3 | Services Catalog & Provider Registration | Backend | POST /provider/services | إضافة خدمة لمقدم الخدمة |
| Sprint 3 | Services Catalog & Provider Registration | Backend | GET /provider/services | خدماتي |
| Sprint 3 | Services Catalog & Provider Registration | Backend | PUT /provider/services/:id | تعديل خدمة |
| Sprint 3 | Services Catalog & Provider Registration | Backend | Provider KYC Status | pending, approved, rejected |
| Sprint 3 | Services Catalog & Provider Registration | Backend | Upload Documents | سجل تجاري، ضريبة، هوية |
| Sprint 3 | Services Catalog & Provider Registration | Backend | Admin Approve Provider API | موافقة المسؤول |
| Sprint 3 | Services Catalog & Provider Registration | Frontend | Provider Register Page | تسجيل ورشة / مقدم خدمة |
| Sprint 3 | Services Catalog & Provider Registration | Frontend | Provider Services Page | خدمات مقدم الخدمة |
| Sprint 3 | Services Catalog & Provider Registration | Frontend | Add Provider Service Form | إضافة خدمة |
| Sprint 3 | Services Catalog & Provider Registration | Frontend | Categories Page | عرض الفئات |
| Sprint 3 | Services Catalog & Provider Registration | Frontend | Provider Pending Page | حالة انتظار الموافقة |
| Sprint 3 | Services Catalog & Provider Registration | Frontend | Admin Providers Review Page | مراجعة مقدمي الخدمة |
| Sprint 3 | Services Catalog & Provider Registration | UI/UX | Service Categories | Grid للفئات |
| Sprint 3 | Services Catalog & Provider Registration | UI/UX | Provider Registration | Stepper للتسجيل |
| Sprint 3 | Services Catalog & Provider Registration | UI/UX | Provider Services | جدول الخدمات |
| Sprint 3 | Services Catalog & Provider Registration | UI/UX | KYC Upload | رفع مستندات |
| Sprint 3 | Services Catalog & Provider Registration | UI/UX | Admin Provider Approval | شاشة مراجعة |
| Sprint 4 | Discover Nearby Services | Backend | GET /services/nearby | البحث عن الخدمات القريبة |
| Sprint 4 | Discover Nearby Services | Backend | Location Query | استخدام lat/lng/radius |
| Sprint 4 | Discover Nearby Services | Backend | Filter by Category | فئة الخدمة |
| Sprint 4 | Discover Nearby Services | Backend | Filter by Rating | التقييم |
| Sprint 4 | Discover Nearby Services | Backend | Filter by Price | السعر |
| Sprint 4 | Discover Nearby Services | Backend | Filter by Availability | متاح الآن |
| Sprint 4 | Discover Nearby Services | Backend | Distance Calculation | حساب المسافة |
| Sprint 4 | Discover Nearby Services | Backend | Provider Details API | تفاصيل مقدم الخدمة |
| Sprint 4 | Discover Nearby Services | Backend | Favorites Entity | المفضلة |
| Sprint 4 | Discover Nearby Services | Backend | Add/Remove Favorite API | إضافة/إزالة مفضلة |
| Sprint 4 | Discover Nearby Services | Frontend | Nearby Services Page | صفحة البحث |
| Sprint 4 | Discover Nearby Services | Frontend | Map/List Toggle | عرض خريطة وقائمة |
| Sprint 4 | Discover Nearby Services | Frontend | Filters UI | فلترة السعر والتقييم |
| Sprint 4 | Discover Nearby Services | Frontend | Provider Card | كرت مقدم الخدمة |
| Sprint 4 | Discover Nearby Services | Frontend | Provider Details Page | تفاصيل مقدم الخدمة |
| Sprint 4 | Discover Nearby Services | Frontend | Favorite Button | المفضلة |
| Sprint 4 | Discover Nearby Services | UI/UX | Search Services | بحث وفلترة |
| Sprint 4 | Discover Nearby Services | UI/UX | Map View | خريطة |
| Sprint 4 | Discover Nearby Services | UI/UX | Provider Details | معلومات مقدم الخدمة |
| Sprint 4 | Discover Nearby Services | UI/UX | Provider Reviews Section | التقييمات |
| Sprint 4 | Discover Nearby Services | UI/UX | Empty Search State | لا توجد نتائج |
| Sprint 5 | Orders: Create Service Request | Backend | Entity: Order | الطلب |
| Sprint 5 | Orders: Create Service Request | Backend | Entity: OrderLocation | موقع الطلب |
| Sprint 5 | Orders: Create Service Request | Backend | Entity: OrderPhoto | صور الطلب |
| Sprint 5 | Orders: Create Service Request | Backend | Entity: OrderTracking | تتبع الحالة |
| Sprint 5 | Orders: Create Service Request | Backend | POST /orders | إنشاء طلب |
| Sprint 5 | Orders: Create Service Request | Backend | GET /orders | قائمة الطلبات |
| Sprint 5 | Orders: Create Service Request | Backend | GET /orders/:id | تفاصيل الطلب |
| Sprint 5 | Orders: Create Service Request | Backend | POST /orders/:id/cancel | إلغاء الطلب |
| Sprint 5 | Orders: Create Service Request | Backend | Upload Order Photos | رفع صور المشكلة |
| Sprint 5 | Orders: Create Service Request | Backend | Order Number Generator | ORD-2026-XXXX |
| Sprint 5 | Orders: Create Service Request | Backend | Initial Status Flow | created → searching |
| Sprint 5 | Orders: Create Service Request | Backend | Notify Nearby Providers | إشعار مقدمي الخدمة |
| Sprint 5 | Orders: Create Service Request | Frontend | Create Order Page | إنشاء طلب |
| Sprint 5 | Orders: Create Service Request | Frontend | Select Vehicle Step | اختيار المركبة |
| Sprint 5 | Orders: Create Service Request | Frontend | Select Service Step | اختيار الخدمة |
| Sprint 5 | Orders: Create Service Request | Frontend | Location Step | تحديد الموقع |
| Sprint 5 | Orders: Create Service Request | Frontend | Upload Photos Step | رفع صور |
| Sprint 5 | Orders: Create Service Request | Frontend | Order Summary Step | مراجعة الطلب |
| Sprint 5 | Orders: Create Service Request | Frontend | My Orders Page | قائمة طلباتي |
| Sprint 5 | Orders: Create Service Request | Frontend | Order Details Page | تفاصيل الطلب |
| Sprint 5 | Orders: Create Service Request | UI/UX | Create Order Wizard | خطوات إنشاء الطلب |
| Sprint 5 | Orders: Create Service Request | UI/UX | Select Vehicle | اختيار المركبة |
| Sprint 5 | Orders: Create Service Request | UI/UX | Select Service | اختيار الخدمة |
| Sprint 5 | Orders: Create Service Request | UI/UX | Location Picker | تحديد الموقع |
| Sprint 5 | Orders: Create Service Request | UI/UX | Upload Damage/Problem Photos | رفع الصور |
| Sprint 5 | Orders: Create Service Request | UI/UX | Order Status Timeline | حالة الطلب |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | Entity: OrderQuote | عرض السعر |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | GET /provider/orders | طلبات متاحة للمقدم |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | GET /provider/orders/:id | تفاصيل الطلب |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | POST /provider/orders/:id/quote | إرسال عرض سعر |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | GET /orders/:id/quotes | عروض الطلب |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | POST /orders/:id/accept-quote | قبول عرض |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | Order Status Logic | searching → quoted → accepted |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | Quote Validation | لا يسمح بعرضين من نفس المقدم لنفس الطلب |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | Expiry Logic | انتهاء صلاحية العرض |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Backend | Assignment Creation | إنشاء تخصيص للطلب بعد القبول |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Frontend | Provider Orders Page | الطلبات الجديدة |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Frontend | Provider Order Details | تفاصيل الطلب للمقدم |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Frontend | Send Quote Modal | إرسال عرض سعر |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Frontend | Customer Quotes Page | عروض الأسعار |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Frontend | Compare Quotes UI | مقارنة العروض |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | Frontend | Accept Quote Action | قبول العرض |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | UI/UX | Provider Request Details | تفاصيل طلب وارد |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | UI/UX | Quote Form | السعر، المدة، التفاصيل |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | UI/UX | Customer Quotes Compare | مقارنة العروض |
| Sprint 6 | Quotes: Provider Send Offer / Customer Accept | UI/UX | Accept Confirmation | تأكيد قبول العرض |
| Sprint 7 | Order Execution & Status Tracking | Backend | Entity: OrderAssignment | تخصيص الطلب |
| Sprint 7 | Order Execution & Status Tracking | Backend | POST /provider/orders/:id/update-status | تحديث حالة الطلب |
| Sprint 7 | Order Execution & Status Tracking | Backend | Order Status Flow | accepted → in\_progress → completed |
| Sprint 7 | Order Execution & Status Tracking | Backend | OrderTracking Records | حفظ سجل الحالات |
| Sprint 7 | Order Execution & Status Tracking | Backend | Upload Before/After Photos | صور قبل وبعد |
| Sprint 7 | Order Execution & Status Tracking | Backend | SignalR Hub Basic | تحديث الحالة لحظيًا |
| Sprint 7 | Order Execution & Status Tracking | Backend | GET /orders/:id/tracking | سجل التتبع |
| Sprint 7 | Order Execution & Status Tracking | Backend | Business Rules | لا يمكن إكمال طلب غير مقبول |
| Sprint 7 | Order Execution & Status Tracking | Backend | Provider Permission | مقدم الخدمة يرى طلباته فقط |
| Sprint 7 | Order Execution & Status Tracking | Frontend | Provider Active Orders | الطلبات النشطة |
| Sprint 7 | Order Execution & Status Tracking | Frontend | Update Status Buttons | تغيير الحالة |
| Sprint 7 | Order Execution & Status Tracking | Frontend | Upload Before/After Photos | رفع صور الخدمة |
| Sprint 7 | Order Execution & Status Tracking | Frontend | Customer Live Status | عرض حالة الطلب |
| Sprint 7 | Order Execution & Status Tracking | Frontend | Status Timeline | Timeline |
| Sprint 7 | Order Execution & Status Tracking | Frontend | Real-time Updates | SignalR Client |
| Sprint 7 | Order Execution & Status Tracking | UI/UX | Active Order Provider | شاشة تنفيذ الطلب |
| Sprint 7 | Order Execution & Status Tracking | UI/UX | Customer Order Tracking | تتبع العميل |
| Sprint 7 | Order Execution & Status Tracking | UI/UX | Status Timeline | created, quoted, accepted, in\_progress, completed |
| Sprint 7 | Order Execution & Status Tracking | UI/UX | Photo Before/After Gallery | معرض الصور |
| Sprint 8 | Payments & Wallet Basic | Backend | Entity: Payment | المدفوعات |
| Sprint 8 | Payments & Wallet Basic | Backend | Entity: WalletTransaction | معاملات المحفظة |
| Sprint 8 | Payments & Wallet Basic | Backend | Entity: WithdrawalRequest | طلبات السحب |
| Sprint 8 | Payments & Wallet Basic | Backend | GET /users/me/wallet | رصيد المحفظة |
| Sprint 8 | Payments & Wallet Basic | Backend | POST /payments/intent | إنشاء عملية دفع |
| Sprint 8 | Payments & Wallet Basic | Backend | POST /payments/confirm | تأكيد الدفع |
| Sprint 8 | Payments & Wallet Basic | Backend | POST /payments/wallet-topup | شحن المحفظة |
| Sprint 8 | Payments & Wallet Basic | Backend | Payment Status Flow | pending, held, captured, failed |
| Sprint 8 | Payments & Wallet Basic | Backend | Wallet Debit/Credit Logic | خصم وإضافة الرصيد |
| Sprint 8 | Payments & Wallet Basic | Backend | Provider Commission Logic | عمولة المنصة |
| Sprint 8 | Payments & Wallet Basic | Backend | Invoice Placeholder | توليد بيانات فاتورة بسيطة |
| Sprint 8 | Payments & Wallet Basic | Backend | Webhook Endpoint | نقطة استقبال من بوابة الدفع |
| Sprint 8 | Payments & Wallet Basic | Frontend | Wallet Page | المحفظة |
| Sprint 8 | Payments & Wallet Basic | Frontend | Payment Page | الدفع |
| Sprint 8 | Payments & Wallet Basic | Frontend | Wallet Topup Page | شحن المحفظة |
| Sprint 8 | Payments & Wallet Basic | Frontend | Payment Status UI | نجاح / فشل |
| Sprint 8 | Payments & Wallet Basic | Frontend | Order Payment Summary | ملخص الدفع |
| Sprint 8 | Payments & Wallet Basic | Frontend | Provider Earnings Page | أرباح مقدم الخدمة |
| Sprint 8 | Payments & Wallet Basic | UI/UX | Wallet | الرصيد والمعاملات |
| Sprint 8 | Payments & Wallet Basic | UI/UX | Checkout | طرق الدفع |
| Sprint 8 | Payments & Wallet Basic | UI/UX | Payment Result | نجاح أو فشل |
| Sprint 8 | Payments & Wallet Basic | UI/UX | Provider Earnings | أرباح مقدم الخدمة |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | Entity: Review | التقييم |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | Entity: Notification | الإشعارات |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | Entity: ChatMessage | المحادثة |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | POST /orders/:id/rate | تقييم الطلب |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | GET /provider/reviews | تقييمات مقدم الخدمة |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | Rating Aggregation | تحديث تقييم مقدم الخدمة |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | GET /users/me/notifications | إشعاراتي |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | Mark Notification Read | تحديد كمقروء |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | SignalR Chat Hub | محادثة أساسية |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | GET /orders/:id/messages | رسائل الطلب |
| Sprint 9 | Reviews, Notifications, Chat Basic | Backend | POST /orders/:id/messages | إرسال رسالة |
| Sprint 9 | Reviews, Notifications, Chat Basic | Frontend | Rating Modal | تقييم الخدمة |
| Sprint 9 | Reviews, Notifications, Chat Basic | Frontend | Reviews Section | عرض التقييمات |
| Sprint 9 | Reviews, Notifications, Chat Basic | Frontend | Notifications Center | مركز الإشعارات |
| Sprint 9 | Reviews, Notifications, Chat Basic | Frontend | Notification Badge | عدد غير المقروء |
| Sprint 9 | Reviews, Notifications, Chat Basic | Frontend | Order Chat Page | محادثة الطلب |
| Sprint 9 | Reviews, Notifications, Chat Basic | Frontend | Chat Component | إرسال واستقبال رسائل |
| Sprint 9 | Reviews, Notifications, Chat Basic | UI/UX | Rate Order | نجوم وتعليق |
| Sprint 9 | Reviews, Notifications, Chat Basic | UI/UX | Notifications | قائمة الإشعارات |
| Sprint 9 | Reviews, Notifications, Chat Basic | UI/UX | Chat | واجهة محادثة |
| Sprint 9 | Reviews, Notifications, Chat Basic | UI/UX | Review List | عرض التقييمات |
| Sprint 10 | Admin Dashboard MVP | Backend | Entity: AdminLog | سجل إجراءات المسؤول |
| Sprint 10 | Admin Dashboard MVP | Backend | GET /admin/dashboard | مؤشرات عامة |
| Sprint 10 | Admin Dashboard MVP | Backend | GET /admin/users | قائمة المستخدمين |
| Sprint 10 | Admin Dashboard MVP | Backend | POST /admin/users/:id/status | تفعيل/تعليق مستخدم |
| Sprint 10 | Admin Dashboard MVP | Backend | GET /admin/providers | مقدمو الخدمة |
| Sprint 10 | Admin Dashboard MVP | Backend | POST /admin/providers/:id/approve | اعتماد مقدم خدمة |
| Sprint 10 | Admin Dashboard MVP | Backend | POST /admin/providers/:id/suspend | تعليق مقدم خدمة |
| Sprint 10 | Admin Dashboard MVP | Backend | GET /admin/orders | كل الطلبات |
| Sprint 10 | Admin Dashboard MVP | Backend | GET /admin/orders/:id | تفاصيل طلب |
| Sprint 10 | Admin Dashboard MVP | Backend | GET /admin/financials | ملخص مالي |
| Sprint 10 | Admin Dashboard MVP | Backend | Admin Audit Logs | تسجيل قرارات المسؤول |
| Sprint 10 | Admin Dashboard MVP | Frontend | Admin Layout | Sidebar + Topbar |
| Sprint 10 | Admin Dashboard MVP | Frontend | Dashboard Page | مؤشرات |
| Sprint 10 | Admin Dashboard MVP | Frontend | Users Management Page | المستخدمون |
| Sprint 10 | Admin Dashboard MVP | Frontend | Providers Management Page | مقدمو الخدمة |
| Sprint 10 | Admin Dashboard MVP | Frontend | Orders Management Page | الطلبات |
| Sprint 10 | Admin Dashboard MVP | Frontend | Financials Page | المالية |
| Sprint 10 | Admin Dashboard MVP | Frontend | Provider Approval Page | مراجعة المستندات |
| Sprint 10 | Admin Dashboard MVP | UI/UX | Admin Dashboard | Cards + Charts |
| Sprint 10 | Admin Dashboard MVP | UI/UX | Users Table | جدول المستخدمين |
| Sprint 10 | Admin Dashboard MVP | UI/UX | Providers Review | مراجعة واعتماد |
| Sprint 10 | Admin Dashboard MVP | UI/UX | Orders Table | متابعة الطلبات |
| Sprint 10 | Admin Dashboard MVP | UI/UX | Financial Summary | ملخص مالي |
| Sprint 11 | Hardening, Security, Testing | Backend | Unit Tests | اختبارات Services |
| Sprint 11 | Hardening, Security, Testing | Backend | Integration Tests | API Tests |
| Sprint 11 | Hardening, Security, Testing | Backend | Validation Layer | FluentValidation |
| Sprint 11 | Hardening, Security, Testing | Backend | Rate Limiting | خصوصًا Auth |
| Sprint 11 | Hardening, Security, Testing | Backend | File Upload Security | نوع وحجم الملف |
| Sprint 11 | Hardening, Security, Testing | Backend | Permission Review | مراجعة الصلاحيات |
| Sprint 11 | Hardening, Security, Testing | Backend | Query Optimization | تحسين الاستعلامات |
| Sprint 11 | Hardening, Security, Testing | Backend | Indexes | فهارس مهمة |
| Sprint 11 | Hardening, Security, Testing | Backend | Error Handling Review | أخطاء موحدة |
| Sprint 11 | Hardening, Security, Testing | Backend | API Versioning | /api/v1 |
| Sprint 11 | Hardening, Security, Testing | Backend | Health Checks | DB, Redis, Storage |
| Sprint 11 | Hardening, Security, Testing | Backend | Background Jobs | Hangfire/Quartz للمهام الدورية |
| Sprint 11 | Hardening, Security, Testing | Frontend | Form Validation | Zod / React Hook Form |
| Sprint 11 | Hardening, Security, Testing | Frontend | Error Boundaries | معالجة أخطاء React |
| Sprint 11 | Hardening, Security, Testing | Frontend | Loading States | حالات تحميل |
| Sprint 11 | Hardening, Security, Testing | Frontend | Empty States | حالات فارغة |
| Sprint 11 | Hardening, Security, Testing | Frontend | Responsive Review | تجاوب الشاشات |
| Sprint 11 | Hardening, Security, Testing | Frontend | API Error Handling | عرض رسائل API |
| Sprint 11 | Hardening, Security, Testing | Frontend | Role-based UI | إخفاء حسب الدور |
| Sprint 11 | Hardening, Security, Testing | UI/UX | Usability Review | مراجعة تجربة المستخدم |
| Sprint 11 | Hardening, Security, Testing | UI/UX | Responsive Audit | موبايل وتابلت |
| Sprint 11 | Hardening, Security, Testing | UI/UX | Design Consistency | توحيد المكونات |
| Sprint 11 | Hardening, Security, Testing | UI/UX | Arabic RTL Review | مراجعة RTL |
| Sprint 11 | Hardening, Security, Testing | UI/UX | Error Messages | صياغة رسائل واضحة |
| Sprint 11 | Hardening, Security, Testing | QA | Test Plan | خطة اختبار |
| Sprint 11 | Hardening, Security, Testing | QA | Test Cases | حالات اختبار |
| Sprint 11 | Hardening, Security, Testing | QA | Regression Testing | اختبار شامل |
| Sprint 11 | Hardening, Security, Testing | QA | Security Checklist | قائمة أمنية |
| Sprint 11 | Hardening, Security, Testing | QA | API Testing | Postman Collection |
| Sprint 11 | Hardening, Security, Testing | QA | Bug Report | تقارير العيوب |
| Sprint 12 | Deployment & UAT | Backend | Docker Build | بناء Images |
| Sprint 12 | Deployment & UAT | Backend | Staging Environment | تجهيز البيئة |
| Sprint 12 | Deployment & UAT | Backend | Migration Deployment | تطبيق migrations |
| Sprint 12 | Deployment & UAT | Backend | Seed Production-like Data | بيانات تجريبية |
| Sprint 12 | Deployment & UAT | Backend | Configure Storage | MinIO/S3 |
| Sprint 12 | Deployment & UAT | Backend | Configure Redis | Redis |
| Sprint 12 | Deployment & UAT | Backend | Configure SMTP/SMS | مزود الرسائل |
| Sprint 12 | Deployment & UAT | Backend | CI/CD Pipeline | GitHub Actions/GitLab CI |
| Sprint 12 | Deployment & UAT | Backend | Monitoring | Logs + Health Checks |
| Sprint 12 | Deployment & UAT | Backend | Backup Strategy | نسخ احتياطي DB |
| Sprint 12 | Deployment & UAT | Frontend | Build React App | Production Build |
| Sprint 12 | Deployment & UAT | Frontend | Environment Config | API URLs |
| Sprint 12 | Deployment & UAT | Frontend | Deploy Admin Panel | نشر لوحة الإدارة |
| Sprint 12 | Deployment & UAT | Frontend | Deploy Customer/Provider Web | حسب النطاق |
| Sprint 12 | Deployment & UAT | Frontend | Fix UAT Bugs | إصلاح ملاحظات المستخدمين |
| Sprint 12 | Deployment & UAT | UI/UX | UAT Observation | مراقبة تجربة المستخدم |
| Sprint 12 | Deployment & UAT | UI/UX | Final UI Adjustments | تحسينات نهائية |
| Sprint 12 | Deployment & UAT | UI/UX | Content Review | النصوص العربية |
| Sprint 12 | Deployment & UAT | UI/UX | Production Assets | أيقونات وصور نهائية |

## وحدات الباكند
| الوحدة | الكيانات | APIs | مهام المطور |
| --- | --- | --- | --- |
| Auth Module | User, RefreshToken, UserDocument, UserAddress | POST /api/v1/auth/register, POST /api/v1/auth/verify-otp, POST /api/v1/auth/refresh-token, POST /api/v1/auth/logout, GET /api/v1/users/me, PUT /api/v1/users/me | JWT Authentication, Refresh Token, OTP Service, Role-based Authorization, CurrentUserService, Password/OTP policy, User status validation |
| Vehicle Module | VehicleBrand, VehicleModel, Vehicle, VehicleMaintenanceHistory | GET /api/v1/brands, GET /api/v1/brands/{id}/models, GET /api/v1/vehicles, POST /api/v1/vehicles, GET /api/v1/vehicles/{id}, PUT /api/v1/vehicles/{id}, DELETE /api/v1/vehicles/{id}, GET /api/v1/vehicles/{id}/maintenance-history | CRUD vehicles, Validate ownership, VIN uniqueness, Soft delete, Vehicle lookup data |
| Provider Module | ServiceProvider, ProviderService, ProviderWorkingDay, ServiceCategory, ServiceSubcategory | POST /api/v1/providers/register, GET /api/v1/provider/profile, PUT /api/v1/provider/profile, GET /api/v1/provider/services, POST /api/v1/provider/services, PUT /api/v1/provider/services/{id}, GET /api/v1/services/categories, GET /api/v1/services/categories/{id}/subcategories, GET /api/v1/services/nearby | Provider registration, Provider approval status, Location filtering, Services pricing, Provider availability, Provider dashboard |
| Orders Module | Order, OrderLocation, OrderQuote, OrderAssignment, OrderTracking, OrderPhoto | POST /api/v1/orders, GET /api/v1/orders, GET /api/v1/orders/{id}, POST /api/v1/orders/{id}/cancel, GET /api/v1/orders/{id}/quotes, POST /api/v1/orders/{id}/accept-quote, GET /api/v1/orders/{id}/tracking, GET /api/v1/provider/orders, GET /api/v1/provider/orders/{id}, POST /api/v1/provider/orders/{id}/quote, POST /api/v1/provider/orders/{id}/update-status | Order state machine, Create order, Notify providers, Quote lifecycle, Accept quote, Assignment, Status tracking, Upload order photos |
| Payment & Wallet | Payment, WalletTransaction, WithdrawalRequest | GET /api/v1/users/me/wallet, POST /api/v1/payments/intent, POST /api/v1/payments/confirm, POST /api/v1/payments/wallet-topup, POST /api/v1/payments/webhook, GET /api/v1/provider/earnings | Payment intent, Wallet balance, Debit/credit transaction, Commission calculation, Payment webhook, Refund placeholder |
| Notification & Chat | Notification, ChatMessage | GET /api/v1/users/me/notifications, POST /api/v1/notifications/{id}/read, GET /api/v1/orders/{id}/messages, POST /api/v1/orders/{id}/messages, /ws/orders/{id}/tracking, /ws/chat/{orderId} | SignalR hub, Notification service, Store notifications, Chat per order, Broadcast status updates |
| Admin Module | AdminLog, Dispute (لاحقًا), PromoCode (لاحقًا) | GET /api/v1/admin/dashboard, GET /api/v1/admin/users, POST /api/v1/admin/users/{id}/status, GET /api/v1/admin/providers, POST /api/v1/admin/providers/{id}/approve, POST /api/v1/admin/providers/{id}/suspend, GET /api/v1/admin/orders, GET /api/v1/admin/financials | Admin authorization, Dashboard counts, User management, Provider approval, Order monitoring, Audit logging |

## صفحات الواجهة
| البوابة | الصفحة | المسار (Route) |
| --- | --- | --- |
| Customer Portal | Login | /login |
| Customer Portal | OTP | /verify-otp |
| Customer Portal | Dashboard | /app/dashboard |
| Customer Portal | My Vehicles | /app/vehicles |
| Customer Portal | Add Vehicle | /app/vehicles/create |
| Customer Portal | Services | /app/services |
| Customer Portal | Provider Details | /app/providers/:id |
| Customer Portal | Create Order | /app/orders/create |
| Customer Portal | My Orders | /app/orders |
| Customer Portal | Order Details | /app/orders/:id |
| Customer Portal | Quotes | /app/orders/:id/quotes |
| Customer Portal | Tracking | /app/orders/:id/tracking |
| Customer Portal | Wallet | /app/wallet |
| Customer Portal | Notifications | /app/notifications |
| Customer Portal | Chat | /app/orders/:id/chat |
| Provider Portal | Provider Dashboard | /provider/dashboard |
| Provider Portal | New Requests | /provider/requests |
| Provider Portal | Active Orders | /provider/orders/active |
| Provider Portal | Order Details | /provider/orders/:id |
| Provider Portal | Send Quote | Modal |
| Provider Portal | Services | /provider/services |
| Provider Portal | Earnings | /provider/earnings |
| Provider Portal | Profile/KYC | /provider/profile |
| Admin Portal | Admin Dashboard | /admin/dashboard |
| Admin Portal | Users | /admin/users |
| Admin Portal | Providers | /admin/providers |
| Admin Portal | Provider Review | /admin/providers/:id |
| Admin Portal | Orders | /admin/orders |
| Admin Portal | Order Details | /admin/orders/:id |
| Admin Portal | Financials | /admin/financials |
| Admin Portal | Settings | /admin/settings |

## خطة UI UX
| السبرنت | الشاشة | الوصف | المكونات المستخدمة |
| --- | --- | --- | --- |
| Sprint 0 | Design system + user flows | تحليل المستخدمين وإعداد Design System وWireframes | Colors, Typography, Buttons, Inputs, Layout grid, RTL rules |
| Sprint 1 | Auth screens | Login, OTP, Complete Profile, User Profile | Button, Input, Card |
| Sprint 2 | Vehicles screens | My Vehicles, Add Vehicle, Vehicle Details, Maintenance Timeline | Card, Table, Timeline, Form, Select |
| Sprint 3 | Provider registration + services | Service Categories, Provider Registration, Provider Services, KYC Upload | Stepper, Grid, Table, Upload Box |
| Sprint 4 | Services discovery + map/list | Search Services, Map View, Provider Details, Provider Reviews | Map Picker, Card, Badge, Modal |
| Sprint 5 | Create order wizard | Create Order Wizard, Select Vehicle, Select Service, Location Picker, Upload Photos | Stepper, Select, Map Picker, Upload Box, Timeline |
| Sprint 6 | Quotes compare + provider quote | Provider Request Details, Quote Form, Customer Quotes Compare, Accept Confirmation | Modal, Table, Card, Button |
| Sprint 7 | Tracking + status timeline | Active Order Provider, Customer Order Tracking, Status Timeline, Photo Gallery | Timeline, Badge, Upload Box, Card |
| Sprint 8 | Wallet + payment | Wallet, Checkout, Payment Result, Provider Earnings | Card, Table, Button, Badge |
| Sprint 9 | Reviews + notifications + chat | Rate Order, Notifications, Chat, Review List | Rating Stars, Notification Item, Chat Component |
| Sprint 10 | Admin dashboard | Admin Dashboard, Users Table, Providers Review, Orders Table, Financial Summary | Table, Card, Chart, Badge |
| Sprint 11 | Responsive + usability audit | Usability Review, Responsive Audit, Design Consistency, Arabic RTL Review | All Components |
| Sprint 12 | UAT improvements | UAT Observation, Final UI Adjustments, Content Review, Production Assets | All Components |

## حالات الطلب
| الحالة | الوصف | قواعد العمل |
| --- | --- | --- |
| created | عند إنشاء الطلب | العميل ينشئ الطلب |
| searching | بعد إرسال الطلب لمقدمي الخدمة | يتم إخطار مقدمي الخدمة القريبين |
| quoted | عند وجود عرض سعر واحد على الأقل | العميل يرى قائمة العروض |
| accepted | عند قبول العميل لعرض | يتم إنشاء تخصيص للطلب |
| in\_progress | عند بدء مقدم الخدمة | مقدم الخدمة يبدأ العمل |
| completed | عند انتهاء الخدمة | الطلب مكتمل ويمكن التقييم |
| cancelled | إذا ألغى العميل أو النظام | لا يمكن إلغاء طلب في حالة متقدمة |
| disputed | إذا فتح العميل نزاعًا | يتم تأجيلها للمرحلة الثانية |

## مهام المطورين
| الدور | Epic | المهمة |
| --- | --- | --- |
| Backend | Epic 1 — Foundation | Create solution architecture |
| Backend | Epic 1 — Foundation | Setup EF Core |
| Backend | Epic 1 — Foundation | Setup Sql Server |
| Backend | Epic 1 — Foundation | Setup Identity/Auth |
| Backend | Epic 1 — Foundation | Setup JWT |
| Backend | Epic 1 — Foundation | Setup Swagger |
| Backend | Epic 1 — Foundation | Setup Serilog |
| Backend | Epic 1 — Foundation | Setup Result Pattern |
| Backend | Epic 1 — Foundation | Setup Pagination |
| Backend | Epic 1 — Foundation | Setup Global Exception Middleware |
| Backend | Epic 1 — Foundation | Setup File Storage Service |
| Backend | Epic 1 — Foundation | Setup Docker Compose |
| Backend | Epic 2 — Auth & Users | Create User entity |
| Backend | Epic 2 — Auth & Users | Create UserDocument entity |
| Backend | Epic 2 — Auth & Users | Create UserAddress entity |
| Backend | Epic 2 — Auth & Users | Register API |
| Backend | Epic 2 — Auth & Users | Verify OTP API |
| Backend | Epic 2 — Auth & Users | Refresh token API |
| Backend | Epic 2 — Auth & Users | Current user API |
| Backend | Epic 2 — Auth & Users | Update profile API |
| Backend | Epic 2 — Auth & Users | Upload avatar API |
| Backend | Epic 2 — Auth & Users | User status middleware |
| Backend | Epic 2 — Auth & Users | RBAC policies |
| Backend | Epic 3 — Vehicles | Create VehicleBrand entity |
| Backend | Epic 3 — Vehicles | Create VehicleModel entity |
| Backend | Epic 3 — Vehicles | Create Vehicle entity |
| Backend | Epic 3 — Vehicles | Create maintenance history entity |
| Backend | Epic 3 — Vehicles | Create vehicles CRUD |
| Backend | Epic 3 — Vehicles | Add brand/model APIs |
| Backend | Epic 3 — Vehicles | Add validation |
| Backend | Epic 3 — Vehicles | Add ownership authorization |
| Backend | Epic 3 — Vehicles | Add seed data |
| Backend | Epic 4 — Providers & Services | Create provider entity |
| Backend | Epic 4 — Providers & Services | Create service category entity |
| Backend | Epic 4 — Providers & Services | Create subcategory entity |
| Backend | Epic 4 — Providers & Services | Create provider service entity |
| Backend | Epic 4 — Providers & Services | Register provider API |
| Backend | Epic 4 — Providers & Services | Upload KYC documents |
| Backend | Epic 4 — Providers & Services | Admin approve provider |
| Backend | Epic 4 — Providers & Services | Add service APIs |
| Backend | Epic 4 — Providers & Services | Nearby services API |
| Backend | Epic 4 — Providers & Services | Provider dashboard API |
| Backend | Epic 5 — Orders | Create order entity |
| Backend | Epic 5 — Orders | Create order location entity |
| Backend | Epic 5 — Orders | Create order photos entity |
| Backend | Epic 5 — Orders | Create order tracking entity |
| Backend | Epic 5 — Orders | Create order assignment entity |
| Backend | Epic 5 — Orders | Create order number generator |
| Backend | Epic 5 — Orders | Create order API |
| Backend | Epic 5 — Orders | Cancel order API |
| Backend | Epic 5 — Orders | Provider available orders API |
| Backend | Epic 5 — Orders | Order details API |
| Backend | Epic 6 — Quotes | Create order quote entity |
| Backend | Epic 6 — Quotes | Send quote API |
| Backend | Epic 6 — Quotes | Get quotes API |
| Backend | Epic 6 — Quotes | Accept quote API |
| Backend | Epic 6 — Quotes | Quote expiry job |
| Backend | Epic 6 — Quotes | Update order status on quote |
| Backend | Epic 6 — Quotes | Create assignment after accept |
| Backend | Epic 7 — Execution | Provider update status API |
| Backend | Epic 7 — Execution | Create tracking records |
| Backend | Epic 7 — Execution | SignalR order tracking |
| Backend | Epic 7 — Execution | Upload before/after photos |
| Backend | Epic 7 — Execution | Validate status transitions |
| Backend | Epic 7 — Execution | Customer tracking API |
| Backend | Epic 8 — Payments | Create payment entity |
| Backend | Epic 8 — Payments | Create wallet transaction entity |
| Backend | Epic 8 — Payments | Wallet balance API |
| Backend | Epic 8 — Payments | Payment intent API |
| Backend | Epic 8 — Payments | Confirm payment API |
| Backend | Epic 8 — Payments | Webhook API |
| Backend | Epic 8 — Payments | Wallet top-up API |
| Backend | Epic 8 — Payments | Provider earnings API |
| Backend | Epic 8 — Payments | Commission calculation |
| Backend | Epic 9 — Reviews & Notifications | Create review entity |
| Backend | Epic 9 — Reviews & Notifications | Rate order API |
| Backend | Epic 9 — Reviews & Notifications | Update provider rating |
| Backend | Epic 9 — Reviews & Notifications | Create notification entity |
| Backend | Epic 9 — Reviews & Notifications | Get notifications API |
| Backend | Epic 9 — Reviews & Notifications | Mark as read API |
| Backend | Epic 9 — Reviews & Notifications | Notification service |
| Backend | Epic 9 — Reviews & Notifications | Push notification placeholder |
| Backend | Epic 10 — Admin | Admin dashboard API |
| Backend | Epic 10 — Admin | Users list API |
| Backend | Epic 10 — Admin | User status update API |
| Backend | Epic 10 — Admin | Providers list API |
| Backend | Epic 10 — Admin | Approve provider API |
| Backend | Epic 10 — Admin | Suspend provider API |
| Backend | Epic 10 — Admin | Orders list API |
| Backend | Epic 10 — Admin | Financial summary API |
| Backend | Epic 10 — Admin | Admin logs |
| Frontend | Epic 1 — App Foundation | Setup Vite React TypeScript |
| Frontend | Epic 1 — App Foundation | Setup Tailwind |
| Frontend | Epic 1 — App Foundation | Setup routing |
| Frontend | Epic 1 — App Foundation | Setup protected routes |
| Frontend | Epic 1 — App Foundation | Setup axios client |
| Frontend | Epic 1 — App Foundation | Setup auth store |
| Frontend | Epic 1 — App Foundation | Setup layout system |
| Frontend | Epic 1 — App Foundation | Setup form library |
| Frontend | Epic 1 — App Foundation | Setup toast notifications |
| Frontend | Epic 1 — App Foundation | Setup shared components |
| Frontend | Epic 2 — Auth | Login page |
| Frontend | Epic 2 — Auth | OTP page |
| Frontend | Epic 2 — Auth | Complete profile page |
| Frontend | Epic 2 — Auth | Logout |
| Frontend | Epic 2 — Auth | Auth redirect |
| Frontend | Epic 2 — Auth | Role-based redirect |
| Frontend | Epic 3 — Customer | Customer dashboard |
| Frontend | Epic 3 — Customer | Vehicles list |
| Frontend | Epic 3 — Customer | Add vehicle |
| Frontend | Epic 3 — Customer | Edit vehicle |
| Frontend | Epic 3 — Customer | Services list |
| Frontend | Epic 3 — Customer | Provider details |
| Frontend | Epic 3 — Customer | Create order wizard |
| Frontend | Epic 3 — Customer | My orders |
| Frontend | Epic 3 — Customer | Order details |
| Frontend | Epic 3 — Customer | Quotes compare |
| Frontend | Epic 3 — Customer | Tracking page |
| Frontend | Epic 3 — Customer | Wallet page |
| Frontend | Epic 3 — Customer | Notifications |
| Frontend | Epic 3 — Customer | Chat |
| Frontend | Epic 4 — Provider | Provider registration |
| Frontend | Epic 4 — Provider | KYC upload |
| Frontend | Epic 4 — Provider | Provider dashboard |
| Frontend | Epic 4 — Provider | New requests |
| Frontend | Epic 4 — Provider | Send quote |
| Frontend | Epic 4 — Provider | Active orders |
| Frontend | Epic 4 — Provider | Update order status |
| Frontend | Epic 4 — Provider | Provider services |
| Frontend | Epic 4 — Provider | Provider earnings |
| Frontend | Epic 4 — Provider | Provider profile |
| Frontend | Epic 5 — Admin | Admin dashboard |
| Frontend | Epic 5 — Admin | Users table |
| Frontend | Epic 5 — Admin | Providers table |
| Frontend | Epic 5 — Admin | Provider approval details |
| Frontend | Epic 5 — Admin | Orders table |
| Frontend | Epic 5 — Admin | Order details |
| Frontend | Epic 5 — Admin | Financials page |
| Frontend | Epic 5 — Admin | Admin logs page |
| Frontend | Epic 6 — Real-time | Setup SignalR client |
| Frontend | Epic 6 — Real-time | Tracking updates |
| Frontend | Epic 6 — Real-time | Chat messages |
| Frontend | Epic 6 — Real-time | Notification badge |
| Frontend | Epic 7 — Polish | Loading states |
| Frontend | Epic 7 — Polish | Error states |
| Frontend | Epic 7 — Polish | Empty states |
| Frontend | Epic 7 — Polish | Responsive design |
| Frontend | Epic 7 — Polish | RTL fixes |
| Frontend | Epic 7 — Polish | Accessibility improvements |
| UI/UX | Epic 1 — Research & Flow | Define personas |
| UI/UX | Epic 1 — Research & Flow | Define customer journey |
| UI/UX | Epic 1 — Research & Flow | Define provider journey |
| UI/UX | Epic 1 — Research & Flow | Define admin journey |
| UI/UX | Epic 1 — Research & Flow | Draw order lifecycle |
| UI/UX | Epic 1 — Research & Flow | Draw quote lifecycle |
| UI/UX | Epic 2 — Design System | Color palette |
| UI/UX | Epic 2 — Design System | Typography |
| UI/UX | Epic 2 — Design System | Buttons |
| UI/UX | Epic 2 — Design System | Forms |
| UI/UX | Epic 2 — Design System | Cards |
| UI/UX | Epic 2 — Design System | Tables |
| UI/UX | Epic 2 — Design System | Badges |
| UI/UX | Epic 2 — Design System | Icons |
| UI/UX | Epic 2 — Design System | Layout grid |
| UI/UX | Epic 2 — Design System | RTL rules |
| UI/UX | Epic 3 — Customer Screens | Login |
| UI/UX | Epic 3 — Customer Screens | OTP |
| UI/UX | Epic 3 — Customer Screens | Dashboard |
| UI/UX | Epic 3 — Customer Screens | Vehicles |
| UI/UX | Epic 3 — Customer Screens | Services |
| UI/UX | Epic 3 — Customer Screens | Provider profile |
| UI/UX | Epic 3 — Customer Screens | Create order |
| UI/UX | Epic 3 — Customer Screens | Quotes |
| UI/UX | Epic 3 — Customer Screens | Order tracking |
| UI/UX | Epic 3 — Customer Screens | Wallet |
| UI/UX | Epic 3 — Customer Screens | Reviews |
| UI/UX | Epic 3 — Customer Screens | Notifications |
| UI/UX | Epic 4 — Provider Screens | Provider registration |
| UI/UX | Epic 4 — Provider Screens | Dashboard |
| UI/UX | Epic 4 — Provider Screens | Requests |
| UI/UX | Epic 4 — Provider Screens | Quote form |
| UI/UX | Epic 4 — Provider Screens | Active order |
| UI/UX | Epic 4 — Provider Screens | Services management |
| UI/UX | Epic 4 — Provider Screens | Earnings |
| UI/UX | Epic 5 — Admin Screens | Dashboard |
| UI/UX | Epic 5 — Admin Screens | Users |
| UI/UX | Epic 5 — Admin Screens | Providers |
| UI/UX | Epic 5 — Admin Screens | Provider review |
| UI/UX | Epic 5 — Admin Screens | Orders |
| UI/UX | Epic 5 — Admin Screens | Financials |
| UI/UX | Epic 5 — Admin Screens | Settings |
| UI/UX | Epic 6 — Prototype | Interactive Figma prototype |
| UI/UX | Epic 6 — Prototype | Mobile responsive views |
| UI/UX | Epic 6 — Prototype | Admin web responsive views |
| UI/UX | Epic 6 — Prototype | Handoff to developers |
| UI/UX | Epic 6 — Prototype | Components naming |
| UI/UX | Epic 6 — Prototype | Design tokens |

## Definition of Done
| الفئة | المعيار |
| --- | --- |
| Backend | الكود مكتوب وفق Clean Architecture |
| Backend | يوجد DTO واضح للطلب والاستجابة |
| Backend | يوجد Validation |
| Backend | يوجد Authorization |
| Backend | الأخطاء موحدة |
| Backend | Swagger محدث |
| Backend | Migration مضافة |
| Backend | Unit/Integration test إذا كانت المهمة حرجة |
| Backend | لا توجد بيانات حساسة في Logs |
| Frontend | الشاشة مطابقة للتصميم |
| Frontend | تدعم RTL |
| Frontend | متجاوبة |
| Frontend | يوجد loading state |
| Frontend | يوجد error state |
| Frontend | يوجد empty state |
| Frontend | تم ربطها فعليًا بالـ API |
| Frontend | لا توجد console errors |
| UI/UX | التصميم مرفوع على Figma |
| UI/UX | المكونات موحدة |
| UI/UX | الحالات المختلفة موثقة |
| UI/UX | يوجد prototype للتدفق المهم |
| UI/UX | تم تسليم الـ assets للمطورين |

## الأولويات
| الأولوية | الميزة |
| --- | --- |
| Must Have | Auth |
| Must Have | Users |
| Must Have | Vehicles |
| Must Have | Providers |
| Must Have | Services |
| Must Have | Orders |
| Must Have | Quotes |
| Must Have | Status tracking |
| Must Have | Payments basic |
| Must Have | Reviews |
| Must Have | Notifications |
| Must Have | Admin approval |
| Should Have | Chat |
| Should Have | Wallet top-up |
| Should Have | Provider earnings |
| Should Have | File upload |
| Should Have | Favorites |
| Should Have | Basic dashboard charts |
| Could Have | Accident reports |
| Could Have | Insurance documents |
| Could Have | Driver live tracking |
| Could Have | Promo codes |
| Could Have | Disputes |
| Later | AI damage estimation |
| Later | OCR |
| Later | Insurance comparison |
| Later | E-commerce |
| Later | Elasticsearch |
| Later | Advanced analytics |

## التقنية
| الطبقة | التقنية | الاستخدام |
| --- | --- | --- |
| Backend | ASP.NET Core 8 | إطار العمل الرئيسي |
| Backend | EF Core | ORM لقاعدة البيانات |
| Backend | Sql Server/Sql Server + PostGIS | قاعدة البيانات والموقع الجغرافي |
| Backend | Redis | التخزين المؤقت |
| Backend | SignalR | التحديثات اللحظية |
| Backend | MediatR | التواصل بين المكونات |
| Backend | FluentValidation | التحقق من البيانات |
| Backend | Serilog | تسجيل الأخطاء |
| Backend | JWT | المصادقة |
| Backend | MinIO/S3 | تخزين الملفات |
| Backend | Docker | الحاويات |
| Frontend | React | إطار الواجهة |
| Frontend | TypeScript | النوعية |
| Frontend | Vite | أداة البناء |
| Frontend | Tailwind CSS | التنسيق |
| Frontend | shadcn/ui | مكونات واجهة المستخدم |
| Frontend | React Hook Form | إدارة النماذج |
| Frontend | Zod | التحقق من النماذج |
| Frontend | TanStack Query | إدارة البيانات |
| Frontend | Zustand | إدارة الحالة |
| Frontend | SignalR Client | التحديثات اللحظية |
| Frontend | Axios | طلبات HTTP |
| Architecture | Clean Architecture | هيكل المشروع |
| Architecture | Domain Driven Modules | تنظيم الوحدات |
| Architecture | CQRS for complex flows | الأوامر والاستعلامات |
| Architecture | Modular Monolith | في البداية |
| Architecture | Microservices | لاحقًا عند التوسع |

## خطة MVP سريعة
| Sprint | النطاق |
| --- | --- |
| Sprint 0 | Setup + Architecture |
| Sprint 1 | Auth + Users |
| Sprint 2 | Vehicles + Services |
| Sprint 3 | Provider Registration + Admin Approval |
| Sprint 4 | Create Order |
| Sprint 5 | Quotes + Accept Quote |
| Sprint 6 | Order Execution + Tracking |
| Sprint 7 | Payment + Review + Admin Dashboard |

## المخرجات
| السبرنت | المخرجات |
| --- | --- |
| Sprint 0 | Repository جاهز, Backend skeleton, Frontend skeleton, Docker development environment, Design system أولي, Swagger شغال |
| Sprint 12 | نسخة Staging, Postman Collection, Swagger Documentation, Admin credentials, Test report, Release notes |