// Verified content only — sourced from docs/Thong_Tin_Website_Eastern_SC.md, asset/logo.jpg,
// and real company photos in asset/{xe_cau,xe_nang,xe_nang_nguoi,cong_trinh}/ (copied into public/photos/).
// Do not add facts, claims, prices, or contact details that are not verified in that document.

import {
  ArrowUpDown,
  Building2,
  CalendarRange,
  Clock,
  Construction,
  FileCheck,
  Forklift,
  Gauge,
  Handshake,
  MessageSquare,
  Send,
  Truck,
  UserCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`
/** Real company photo (not stock) — see public/photos/. */
const photo = (name: string) => `/photos/${name}.jpg`

/** Real xe nâng (forklift) photos, company-branded units. */
export const realForkliftImages = [photo('xe-nang-1'), photo('xe-nang-2')]
/** Real xe nâng người (personnel lift) photo. */
export const realPersonnelLiftImage = photo('xe-nang-nguoi-1')
/** Real job-site photos (not tied to a specific named project — see referenceProjects). */
export const realProjectPhotos = Array.from({ length: 28 }, (_, i) => photo(`cong-trinh-${i + 1}`))

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  image: string
  icon: LucideIcon
}

export type EquipmentCategory = {
  slug: string
  title: string
  short: string
  image: string
  /** true for the category with verified technical detail (xe cẩu) */
  hasSpecs: boolean
  icon: LucideIcon
}

export type EquipmentItem = {
  slug: string
  title: string
  category: string
  /** null when no verified capacity figure exists for this listing */
  capacityTon: number | null
  image: string
  short: string
  description: string
  applications: string
  hasSpecs: boolean
}

export type CapacityBucket = { label: string; min: number; max: number }

export type ReferenceProject = {
  name: string
  sector: 'Dầu khí' | 'Điện gió'
}

export type Testimonial = {
  quote: string
  author: string
  role?: string
  /** 1–5 */
  rating: number
  recommended: boolean
}

export const company = {
  legalName: 'Công Ty TNHH Dịch Vụ Xây Lắp Miền Đông',
  brandName: 'Xây Lắp Miền Đông',
  englishName: 'Eastern S&C Company Limited',
  foundedDate: '19/05/2020',
  address: '15A Viba, Phường Vũng Tàu, TP. Hồ Chí Minh',
  phone: '0986.371.079',
  phoneDigits: '0986371079',
  contactPerson: 'Nguyễn Quang Hòa',
  serviceAreas: ['Ninh Thuận', 'Bình Thuận', 'Bình Dương', 'TP. Hồ Chí Minh', 'Cà Mau'],
  differentiators: ['Giá cả hợp lý', 'Uy tín', 'Chất lượng hiệu quả'],
}

export const phoneHref = `tel:${company.phoneDigits}`

export const founder = {
  name: 'Ông Nguyễn Quang Hòa',
  title: 'Giám đốc điều hành',
  quote:
    'Tại EASTERN S&C COMPANY LIMITED, chúng tôi không chỉ cung cấp thiết bị, chúng tôi cung cấp sự an tâm và giải pháp tối ưu cho mọi công trình. Tầm nhìn của chúng tôi là trở thành đối tác tin cậy hàng đầu trong ngành nâng hạ tại Việt Nam, luôn đặt an toàn và hiệu quả của khách hàng lên hàng đầu.',
  /** Real photo (asset/CEO.jpg) — founder standing in front of company crane equipment. */
  image: photo('ceo'),
}

export const nav = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Thiết bị', href: '/thiet-bi' },
  { label: 'Dịch vụ', href: '/dich-vu' },
  { label: 'Công trình', href: '/du-an' },
  { label: 'Liên hệ', href: '/lien-he' },
]

// --- Services (Mục 4 "Dịch vụ cung cấp" của tài liệu gốc) ---

export const services: Service[] = [
  {
    slug: 'cho-thue-xe-nang',
    title: 'Cho thuê xe nâng',
    short: 'Xe nâng phục vụ kho bãi, nhà xưởng và công trình.',
    description:
      'Cho thuê xe nâng phù hợp với nhu cầu kho bãi, nhà xưởng và công trình. Liên hệ để được tư vấn loại xe và tải trọng phù hợp với công việc thực tế.',
    image: realForkliftImages[0],
    icon: Forklift,
  },
  {
    slug: 'cho-thue-xe-cau',
    title: 'Cho thuê xe cẩu',
    short: 'Xe cẩu nhiều tải trọng, phục vụ công trình dầu khí, điện gió và xây dựng.',
    description:
      'Cho thuê xe cẩu với dải tải trọng đa dạng, đã tham gia thi công các công trình dầu khí và điện gió trọng điểm. Liên hệ để được tư vấn thiết bị và phương án cẩu lắp phù hợp.',
    image: photo('xe-cau-250-tan'),
    icon: Construction,
  },
  {
    slug: 'cho-thue-xe-nang-nguoi',
    title: 'Cho thuê xe nâng người',
    short: 'Thiết bị nâng người phục vụ thi công và bảo trì trên cao.',
    description:
      'Cho thuê xe nâng người phục vụ các hạng mục thi công, lắp đặt và bảo trì trên cao. Liên hệ để trao đổi độ cao nâng và điều kiện mặt bằng.',
    image: realPersonnelLiftImage,
    icon: ArrowUpDown,
  },
  {
    slug: 'cho-thue-thiet-bi-nang-ha-khac',
    title: 'Cho thuê thiết bị nâng hạ khác',
    short: 'Các thiết bị nâng hạ bổ sung theo yêu cầu công việc.',
    description:
      'Ngoài xe nâng và xe cẩu, công ty còn cung cấp các thiết bị nâng hạ khác theo yêu cầu cụ thể của từng công trình. Liên hệ để được tư vấn thiết bị phù hợp.',
    image: photo('thiet-bi-nang-ha-khac-1'),
    icon: Wrench,
  },
  {
    slug: 'cho-thue-kem-tai-xe',
    title: 'Cho thuê kèm tài xế / vận hành viên',
    short: 'Có đội ngũ tài xế và vận hành viên đi kèm thiết bị.',
    description:
      'Thiết bị cho thuê có thể đi kèm tài xế hoặc vận hành viên, hỗ trợ triển khai công việc an toàn và đúng phương án. Liên hệ để trao đổi nhu cầu nhân sự vận hành.',
    image: realForkliftImages[1],
    icon: UserCheck,
  },
  {
    slug: 'van-chuyen-giao-thiet-bi',
    title: 'Vận chuyển – giao thiết bị',
    short: 'Hỗ trợ vận chuyển và giao thiết bị đến công trình.',
    description:
      'Hỗ trợ vận chuyển và giao thiết bị đến địa điểm công trình theo kế hoạch đã thống nhất. Liên hệ để trao đổi địa điểm và thời gian giao nhận.',
    image: img('photo-1626121300305-def4dc305387'),
    icon: Truck,
  },
  {
    slug: 'cho-thue-ngan-han',
    title: 'Cho thuê ngắn hạn',
    short: 'Linh hoạt theo thời gian sử dụng thực tế.',
    description:
      'Cho thuê thiết bị theo thời gian ngắn hạn, phù hợp với các hạng mục công việc theo đợt. Liên hệ để trao đổi thời gian sử dụng cụ thể.',
    image: img('photo-1645736315000-6f788915923b'),
    icon: Clock,
  },
  {
    slug: 'cho-thue-dai-han',
    title: 'Cho thuê dài hạn',
    short: 'Phương án đồng hành cùng công trình dài ngày.',
    description:
      'Cho thuê thiết bị theo phương án dài hạn cho các công trình có thời gian thi công kéo dài. Liên hệ để trao đổi phương án và kế hoạch triển khai.',
    image: img('photo-1726731782158-fcf6822b6ca4'),
    icon: CalendarRange,
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

export const serviceOptions = services.map((s) => s.title)

// --- Equipment (Mục 3 "Thông tin thiết bị cho thuê" của tài liệu gốc) ---

/** Tải trọng xe cẩu hiện có, theo đơn vị tấn. */
export const craneCapacitiesTon = ['6', '7', '10', '20', '50', '70', '150', '180', '250', '350', '500', '800', '1250']

export const craneOrigins = ['Nhật Bản', 'Trung Quốc', 'Mỹ', 'Đức']

export const craneModelYears = ['2010', '2015', '2021']

/** Real xe cẩu photos, one per verified capacity class — filename matches the ton figure. */
export const craneImageByTon: Record<string, string> = Object.fromEntries(
  craneCapacitiesTon.map((ton) => [ton, photo(`xe-cau-${ton}-tan`)]),
)

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: 'xe-cau',
    title: 'Xe cẩu',
    short: `Tải trọng từ ${craneCapacitiesTon[0]} tấn đến ${craneCapacitiesTon[craneCapacitiesTon.length - 1]} tấn.`,
    image: photo('xe-cau-250-tan'),
    hasSpecs: true,
    icon: Construction,
  },
  {
    slug: 'xe-nang',
    title: 'Xe nâng',
    short: 'Phục vụ kho bãi, nhà xưởng và công trình.',
    image: realForkliftImages[0],
    hasSpecs: false,
    icon: Forklift,
  },
  {
    slug: 'xe-nang-nguoi',
    title: 'Xe nâng người',
    short: 'Phục vụ thi công và bảo trì trên cao.',
    image: realPersonnelLiftImage,
    hasSpecs: false,
    icon: ArrowUpDown,
  },
  {
    slug: 'thiet-bi-nang-ha-khac',
    title: 'Thiết bị nâng hạ khác',
    short: 'Bổ sung theo yêu cầu cụ thể của công trình.',
    image: photo('thiet-bi-nang-ha-khac-1'),
    hasSpecs: false,
    icon: Wrench,
  },
]

export const getEquipmentCategory = (slug: string) => equipmentCategories.find((e) => e.slug === slug)

/**
 * Flat, filterable equipment catalog. Crane listings are one entry per verified
 * capacity class (real data). The other three categories have no verified
 * per-unit specs yet, so each is a single honest "contact for specs" listing —
 * see docs/Thong_Tin_Website_Eastern_SC.md, no fabricated models/specs.
 */
export const equipmentItems: EquipmentItem[] = [
  ...craneCapacitiesTon.map(
    (ton): EquipmentItem => ({
      slug: `xe-cau-${ton}-tan`,
      title: `Xe cẩu ${ton} tấn`,
      category: 'Xe cẩu',
      capacityTon: Number(ton),
      image: craneImageByTon[ton],
      short: `Sức nâng ${ton} tấn, có kèm tài xế / vận hành viên.`,
      description: `Xe cẩu tải trọng ${ton} tấn, xuất xứ ${craneOrigins.join(', ')}, đời xe ${craneModelYears.join(', ')}. Có kèm tài xế / vận hành viên.`,
      applications: 'Phù hợp cho công trình dầu khí, điện gió và xây dựng công nghiệp.',
      hasSpecs: true,
    }),
  ),
  {
    slug: 'xe-nang',
    title: 'Xe nâng',
    category: 'Xe nâng',
    capacityTon: null,
    image: realForkliftImages[0],
    short: 'Phục vụ kho bãi, nhà xưởng và công trình.',
    description: 'Cho thuê xe nâng phù hợp với nhu cầu kho bãi, nhà xưởng và công trình. Liên hệ để được tư vấn loại xe và tải trọng phù hợp.',
    applications: 'Phù hợp cho kho bãi, nhà xưởng và công trình.',
    hasSpecs: false,
  },
  {
    slug: 'xe-nang-nguoi',
    title: 'Xe nâng người',
    category: 'Xe nâng người',
    capacityTon: null,
    image: realPersonnelLiftImage,
    short: 'Phục vụ thi công và bảo trì trên cao.',
    description: 'Cho thuê xe nâng người phục vụ các hạng mục thi công, lắp đặt và bảo trì trên cao. Liên hệ để trao đổi độ cao nâng và điều kiện mặt bằng.',
    applications: 'Phù hợp cho thi công, lắp đặt và bảo trì trên cao.',
    hasSpecs: false,
  },
  {
    slug: 'thiet-bi-nang-ha-khac',
    title: 'Thiết bị nâng hạ khác',
    category: 'Thiết bị nâng hạ khác',
    capacityTon: null,
    image: photo('thiet-bi-nang-ha-khac-1'),
    short: 'Bổ sung theo yêu cầu cụ thể của công trình.',
    description: 'Ngoài xe nâng và xe cẩu, công ty còn cung cấp các thiết bị nâng hạ khác theo yêu cầu cụ thể của từng công trình. Liên hệ để được tư vấn thiết bị phù hợp.',
    applications: 'Theo yêu cầu cụ thể của từng công trình.',
    hasSpecs: false,
  },
]

export const getEquipmentItem = (slug: string) => equipmentItems.find((e) => e.slug === slug)

export const equipmentCategoryFilters = equipmentCategories.map((c) => c.title)

/** Capacity filter only affects "Xe cẩu" listings — the only category with a verified tonnage figure. */
export const capacityBuckets: CapacityBucket[] = [
  { label: 'Dưới 10 tấn', min: 0, max: 10 },
  { label: '10 – 50 tấn', min: 10, max: 50 },
  { label: '50 – 100 tấn', min: 50, max: 100 },
  { label: 'Trên 100 tấn', min: 100, max: Infinity },
]

// --- Rental process ---
// Generic, verifiable workflow description (not a specific company claim/statistic).

export const rentalProcessSteps: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Gửi yêu cầu', text: 'Gửi thông tin qua form hoặc gọi trực tiếp hotline.', icon: Send },
  { title: 'Tư vấn thiết bị', text: 'Trao đổi tải trọng, thời gian và điều kiện công trình.', icon: MessageSquare },
  { title: 'Nhận báo giá', text: 'Nhận phương án và báo giá phù hợp với nhu cầu.', icon: FileCheck },
  { title: 'Điều phối thiết bị', text: 'Thống nhất lịch trình và điều phối thiết bị đến công trình.', icon: Truck },
  { title: 'Bàn giao & hỗ trợ', text: 'Bàn giao thiết bị kèm tài xế / vận hành viên khi cần.', icon: Handshake },
]

// --- Reference projects (Mục 2 "Định vị thương hiệu & điểm mạnh" của tài liệu gốc) ---
// Đây là danh sách công trình công ty đã tham gia thi công, không phải hồ sơ dự án đầy đủ
// (chưa có địa điểm, thời gian, hình ảnh xác thực cho từng công trình).

export const referenceProjects: ReferenceProject[] = [
  { name: 'Ørsted', sector: 'Dầu khí' },
  { name: 'P15', sector: 'Dầu khí' },
  { name: 'Nhà máy lọc hóa dầu Long Sơn', sector: 'Dầu khí' },
  { name: 'Lạc Đà Vàng', sector: 'Dầu khí' },
  { name: 'Lô B', sector: 'Dầu khí' },
  { name: 'Gallaf', sector: 'Dầu khí' },
  { name: 'Lạc Hòa', sector: 'Điện gió' },
  { name: 'Hòa Đông', sector: 'Điện gió' },
  { name: 'Ninh Thuận', sector: 'Điện gió' },
  { name: 'Trung Hải', sector: 'Điện gió' },
  { name: 'Ấn Độ', sector: 'Điện gió' },
]

// --- Customer testimonials ---
// ⚠️ MOCK / PLACEHOLDER DATA — requested explicitly to preview the design
// (avatar, star rating, recommend badge). Names, roles, and quotes below are
// illustrative only, NOT real customers. Replace every entry with a real
// { quote, author, role, rating, recommended } before this site goes live —
// publishing these as genuine reviews would violate this project's own
// "never invent testimonials" content rule.

export const testimonials: Testimonial[] = [
  {
    quote:
      'Xe cẩu đến đúng hẹn, tài xế thao tác cẩn thận. Trao đổi tải trọng và phương án trước khi triển khai rất rõ ràng.',
    author: 'Nguyễn Văn Hùng',
    role: 'Chỉ huy công trình',
    rating: 5,
    recommended: true,
  },
  {
    quote: 'Thuê xe nâng ngắn hạn cho đợt nhập hàng cao điểm, thủ tục nhanh và thiết bị hoạt động ổn định suốt thời gian thuê.',
    author: 'Trần Thị Mai',
    role: 'Quản lý kho vận',
    rating: 5,
    recommended: true,
  },
  {
    quote: 'Đội ngũ tư vấn đúng loại thiết bị cho mặt bằng chật hẹp của công trình. Vận chuyển và lắp đặt đúng lịch đã thống nhất.',
    author: 'Lê Minh Tuấn',
    role: 'Chủ thầu xây dựng',
    rating: 4,
    recommended: true,
  },
  {
    quote: 'Đã hợp tác nhiều đợt cho các hạng mục nâng hạ tại nhà máy. Phản hồi báo giá nhanh, thiết bị đáp ứng đúng tải trọng yêu cầu.',
    author: 'Phạm Thị Hương',
    role: 'Quản lý nhà máy',
    rating: 5,
    recommended: true,
  },
]

// --- Trust metrics ---
// Measurable, verifiable facts only (no invented years-of-experience/customer counts).

export const trustMetrics: { value: string; label: string; icon: LucideIcon }[] = [
  { value: company.foundedDate.split('/').at(-1) ?? '', label: 'Năm thành lập', icon: Building2 },
  { value: `${Number(craneCapacitiesTon.at(-1)).toLocaleString('vi-VN')} tấn`, label: 'Sức nâng xe cẩu tối đa', icon: Gauge },
  { value: `${referenceProjects.length}`, label: 'Công trình đã tham gia', icon: Construction },
  { value: 'Có', label: 'Tài xế / vận hành viên đi kèm', icon: UserCheck },
]

// --- SEO / site config ---

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const seo = {
  title: `Cho thuê xe cẩu & thiết bị nâng hạ | ${company.brandName}`,
  description: `${company.brandName} cho thuê xe cẩu, xe nâng và thiết bị nâng hạ, phục vụ các công trình dầu khí, điện gió và xây dựng công nghiệp tại ${company.serviceAreas.join(', ')}.`,
}

// --- Decorative imagery ---

/** Background slider on the hero section — real company photos, cropped for a wide band. */
export const heroSlides = [photo('hero-slide-1'), photo('hero-slide-2'), photo('hero-slide-3')]
/** Real photo — crew and crane at a job site (asset/Worker.jpg). */
export const aboutImage = photo('worker-1')
/** Real photo — used as the Giới thiệu page's hero band background. */
export const aboutHeroImage = photo('cong-trinh-1')
/** Real photo — crew photo at a job site (asset/Worker_1.jpg), first image on the Giới thiệu page. */
export const introImage = photo('worker-2')

// --- Page banner content (shared PageBanner component, one entry per page) ---

export type PageBannerKey = 'about' | 'equipment' | 'services' | 'projects' | 'contact'

export type PageBannerContent = {
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
}

export const pageBanners: Record<PageBannerKey, PageBannerContent> = {
  about: {
    eyebrow: `${company.brandName} · Nâng hạ & thiết bị`,
    title: 'Giới thiệu',
    description: 'Đồng hành cùng công trình. Vững vàng từng hành trình nâng hạ.',
    image: aboutHeroImage,
    alt: 'Xe cẩu tại công trình công nghiệp lớn',
  },
  equipment: {
    eyebrow: 'Xe cẩu · Xe nâng · Thiết bị nâng hạ',
    title: 'Thiết bị',
    description: 'Giải pháp thiết bị nâng hạ đáp ứng đa dạng nhu cầu công trình.',
    image: photo('xe-cau-800-tan'),
    alt: 'Đội xe cẩu và thiết bị nâng hạ tại bãi tập kết',
  },
  services: {
    eyebrow: 'Nâng hạ · Vận chuyển · Lắp đặt',
    title: 'Dịch vụ',
    description: 'Giải pháp nâng hạ và vận chuyển chuyên nghiệp cho công trình công nghiệp.',
    image: photo('xe-cau-350-tan'),
    alt: 'Xe cẩu đang thực hiện nâng hạ tại công trình',
  },
  projects: {
    eyebrow: 'Dự án · Công trình công nghiệp',
    title: 'Công trình',
    description: 'Đồng hành cùng những công trình lớn với năng lực nâng hạ chuyên nghiệp.',
    image: photo('cong-trinh-2'),
    alt: 'Nhiều xe cẩu thi công tại công trình quy mô lớn',
  },
  contact: {
    eyebrow: `${company.brandName} · Liên hệ`,
    title: 'Liên hệ',
    description: 'Trao đổi nhu cầu thiết bị và nhận tư vấn phù hợp cho công trình của bạn.',
    image: aboutImage,
    alt: 'Đội ngũ Xây Lắp Miền Đông tại công trình',
  },
}

export const site = { company, services, equipmentCategories, equipmentItems, referenceProjects }
export default site
