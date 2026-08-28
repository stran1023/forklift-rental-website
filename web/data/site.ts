// Verified content only — sourced from docs/Thong_Tin_Website_Eastern_SC.md, asset/logo.jpg,
// and real company photos in asset/{can_cau,xe_nang,du_an_thuc_te}/ (copied into public/photos/).
// Do not add facts, claims, prices, or contact details that are not verified in that document.

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`
/** Real company photo (not stock) — see public/photos/. */
const photo = (name: string) => `/photos/${name}.jpg`

/** Real xe cẩu (crawler crane) photos from company job sites. */
export const realCraneImages = Array.from({ length: 8 }, (_, i) => photo(`xe-cau-${i + 1}`))
/** Real xe nâng (forklift) photos, company-branded units. */
export const realForkliftImages = Array.from({ length: 4 }, (_, i) => photo(`xe-nang-${i + 1}`))
/** Real job-site photos (not tied to a specific named project — see referenceProjects). */
export const realProjectPhotos = Array.from({ length: 8 }, (_, i) => photo(`cong-trinh-${i + 1}`))

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  image: string
}

export type EquipmentCategory = {
  slug: string
  title: string
  short: string
  image: string
  /** true for the category with verified technical detail (xe cẩu) */
  hasSpecs: boolean
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

export const company = {
  legalName: 'Công Ty TNHH Dịch Vụ Xây Lắp Miền Đông',
  brandName: 'Xây Lắp Miền Đông',
  englishName: 'Eastern S&C Company Limited',
  foundedDate: '19/05/2020',
  address: '15A Viba, Phường Vũng Tàu, TP. Hồ Chí Minh',
  phone: '0934.090.659',
  phoneDigits: '0934090659',
  serviceAreas: ['Ninh Thuận', 'Bình Thuận', 'Bình Dương', 'TP. Hồ Chí Minh', 'Cà Mau'],
  differentiators: ['Giá cả hợp lý', 'Uy tín', 'Chất lượng hiệu quả'],
}

export const phoneHref = `tel:${company.phoneDigits}`

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
    image: photo('xe-nang-2'),
  },
  {
    slug: 'cho-thue-xe-cau',
    title: 'Cho thuê xe cẩu',
    short: 'Xe cẩu nhiều tải trọng, phục vụ công trình dầu khí, điện gió và xây dựng.',
    description:
      'Cho thuê xe cẩu với dải tải trọng đa dạng, đã tham gia thi công các công trình dầu khí và điện gió trọng điểm. Liên hệ để được tư vấn thiết bị và phương án cẩu lắp phù hợp.',
    image: photo('xe-cau-1'),
  },
  {
    slug: 'cho-thue-xe-nang-nguoi',
    title: 'Cho thuê xe nâng người',
    short: 'Thiết bị nâng người phục vụ thi công và bảo trì trên cao.',
    description:
      'Cho thuê xe nâng người phục vụ các hạng mục thi công, lắp đặt và bảo trì trên cao. Liên hệ để trao đổi độ cao nâng và điều kiện mặt bằng.',
    image: img('photo-1786057424991-dfb714428b8e'),
  },
  {
    slug: 'cho-thue-thiet-bi-nang-ha-khac',
    title: 'Cho thuê thiết bị nâng hạ khác',
    short: 'Các thiết bị nâng hạ bổ sung theo yêu cầu công việc.',
    description:
      'Ngoài xe nâng và xe cẩu, công ty còn cung cấp các thiết bị nâng hạ khác theo yêu cầu cụ thể của từng công trình. Liên hệ để được tư vấn thiết bị phù hợp.',
    image: img('photo-1586458995526-09ce6839babe'),
  },
  {
    slug: 'cho-thue-kem-tai-xe',
    title: 'Cho thuê kèm tài xế / vận hành viên',
    short: 'Có đội ngũ tài xế và vận hành viên đi kèm thiết bị.',
    description:
      'Thiết bị cho thuê có thể đi kèm tài xế hoặc vận hành viên, hỗ trợ triển khai công việc an toàn và đúng phương án. Liên hệ để trao đổi nhu cầu nhân sự vận hành.',
    image: photo('cong-trinh-8'),
  },
  {
    slug: 'van-chuyen-giao-thiet-bi',
    title: 'Vận chuyển – giao thiết bị',
    short: 'Hỗ trợ vận chuyển và giao thiết bị đến công trình.',
    description:
      'Hỗ trợ vận chuyển và giao thiết bị đến địa điểm công trình theo kế hoạch đã thống nhất. Liên hệ để trao đổi địa điểm và thời gian giao nhận.',
    image: img('photo-1626121300305-def4dc305387'),
  },
  {
    slug: 'cho-thue-ngan-han',
    title: 'Cho thuê ngắn hạn',
    short: 'Linh hoạt theo thời gian sử dụng thực tế.',
    description:
      'Cho thuê thiết bị theo thời gian ngắn hạn, phù hợp với các hạng mục công việc theo đợt. Liên hệ để trao đổi thời gian sử dụng cụ thể.',
    image: img('photo-1645736315000-6f788915923b'),
  },
  {
    slug: 'cho-thue-dai-han',
    title: 'Cho thuê dài hạn',
    short: 'Phương án đồng hành cùng công trình dài ngày.',
    description:
      'Cho thuê thiết bị theo phương án dài hạn cho các công trình có thời gian thi công kéo dài. Liên hệ để trao đổi phương án và kế hoạch triển khai.',
    image: img('photo-1726731782158-fcf6822b6ca4'),
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

export const serviceOptions = services.map((s) => s.title)

// --- Equipment (Mục 3 "Thông tin thiết bị cho thuê" của tài liệu gốc) ---

/** Tải trọng xe cẩu hiện có, theo đơn vị tấn. */
export const craneCapacitiesTon = ['6', '7', '10', '20', '50', '70', '150', '180', '250', '350', '500', '800', '1250']

export const craneOrigins = ['Nhật Bản', 'Trung Quốc', 'Mỹ', 'Đức']

export const craneModelYears = ['2010', '2015', '2021']

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: 'xe-cau',
    title: 'Xe cẩu',
    short: `Tải trọng từ ${craneCapacitiesTon[0]} tấn đến ${craneCapacitiesTon[craneCapacitiesTon.length - 1]} tấn.`,
    image: photo('xe-cau-1'),
    hasSpecs: true,
  },
  {
    slug: 'xe-nang',
    title: 'Xe nâng',
    short: 'Phục vụ kho bãi, nhà xưởng và công trình.',
    image: photo('xe-nang-2'),
    hasSpecs: false,
  },
  {
    slug: 'xe-nang-nguoi',
    title: 'Xe nâng người',
    short: 'Phục vụ thi công và bảo trì trên cao.',
    image: img('photo-1786057424991-dfb714428b8e'),
    hasSpecs: false,
  },
  {
    slug: 'thiet-bi-nang-ha-khac',
    title: 'Thiết bị nâng hạ khác',
    short: 'Bổ sung theo yêu cầu cụ thể của công trình.',
    image: img('photo-1586458995526-09ce6839babe'),
    hasSpecs: false,
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
    (ton, i): EquipmentItem => ({
      slug: `xe-cau-${ton}-tan`,
      title: `Xe cẩu ${ton} tấn`,
      category: 'Xe cẩu',
      capacityTon: Number(ton),
      image: realCraneImages[i % realCraneImages.length],
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
    image: photo('xe-nang-2'),
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
    image: img('photo-1786057424991-dfb714428b8e'),
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
    image: img('photo-1586458995526-09ce6839babe'),
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
  { label: '< 10 tấn', min: 0, max: 10 },
  { label: '10 – 50 tấn', min: 10, max: 50 },
  { label: '50 – 100 tấn', min: 50, max: 100 },
  { label: '> 100 tấn', min: 100, max: Infinity },
]

// --- Rental process ---
// Generic, verifiable workflow description (not a specific company claim/statistic).

export const rentalProcessSteps = [
  { title: 'Gửi yêu cầu', text: 'Gửi thông tin qua form hoặc gọi trực tiếp hotline.' },
  { title: 'Tư vấn thiết bị', text: 'Trao đổi tải trọng, thời gian và điều kiện công trình.' },
  { title: 'Nhận báo giá', text: 'Nhận phương án và báo giá phù hợp với nhu cầu.' },
  { title: 'Điều phối thiết bị', text: 'Thống nhất lịch trình và điều phối thiết bị đến công trình.' },
  { title: 'Bàn giao & hỗ trợ', text: 'Bàn giao thiết bị kèm tài xế / vận hành viên khi cần.' },
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

// --- Trust metrics ---
// Measurable, verifiable facts only (no invented years-of-experience/customer counts).

export const trustMetrics = [
  { value: company.foundedDate.split('/').at(-1) ?? '', label: 'Năm thành lập' },
  { value: `${craneCapacitiesTon.at(-1)} tấn`, label: 'Sức nâng xe cẩu tối đa' },
  { value: `${referenceProjects.length}`, label: 'Công trình đã tham gia' },
  { value: 'Có', label: 'Tài xế / vận hành viên đi kèm' },
]

// --- SEO / site config ---

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const seo = {
  title: `Cho thuê xe cẩu & thiết bị nâng hạ | ${company.brandName}`,
  description: `${company.brandName} cho thuê xe cẩu, xe nâng và thiết bị nâng hạ, phục vụ các công trình dầu khí, điện gió và xây dựng công nghiệp tại ${company.serviceAreas.join(', ')}.`,
}

// --- Decorative imagery (ảnh minh họa, không phải ảnh thực tế của công ty) ---

export const heroImage = photo('xe-cau-1')
export const aboutImage = photo('cong-trinh-2')
export const ctaImage = img('photo-1508791290064-c27cc1ef7a9a')

export const site = { company, services, equipmentCategories, equipmentItems, referenceProjects }
export default site
