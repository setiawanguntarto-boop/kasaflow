import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Menu,
  X,
  Search,
  ClipboardList,
  CheckCircle,
  Truck,
  Scale,
  BarChart3,
  CreditCard,
  Server,
  Star,
  Award,
  Activity,
  Tractor,
  Clock,
  ShoppingBag,
  Gauge,
  TrendingUp,
  Eye,
  Plus,
  Edit3,
  Trash2,
  Download,
  Filter,
  Clipboard,
  Sprout,
  LogOut,
  FileBarChart2,
  Archive,
  Percent,
  Wallet
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const volumeData = [
    { month: "Juli", volume: 28 },
    { month: "Agustus", volume: 35 },
    { month: "September", volume: 30 },
    { month: "Oktober", volume: 42 },
  ];

  const wilayahData = [
    { name: "Pati", value: 32400, color: "#2E7D32" },
    { name: "Blora", value: 27900, color: "#43A047" },
    { name: "Rembang", value: 22100, color: "#66BB6A" },
    { name: "Grobogan", value: 20800, color: "#81C784" },
  ];

  const ekosistemData = [
    { name: "Kasaflow", value: 55, color: "#075E54" },
    { name: "PoKu", value: 25, color: "#4CAF50" },
    { name: "Traki", value: 20, color: "#81C784" },
  ];

  const profitData = [
    { month: "Juli", margin: 12, biaya: 55 },
    { month: "Agustus", margin: 15, biaya: 52 },
    { month: "September", margin: 13, biaya: 58 },
    { month: "Oktober", margin: 17, biaya: 54 },
  ];

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "laporan", label: "Laporan Panen", icon: FileText },
    { id: "petani", label: "Manajemen Petani", icon: Users },
    { id: "pengaturan", label: "Pengaturan", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-[#075E54] text-white transition-transform duration-300 md:relative md:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-4">
          <div>
            <div className="mb-10 flex items-center space-x-2 px-2">
              <Sprout className="h-8 w-8 text-[#2E7D32]" />
              <h1 className="text-2xl font-bold">Kasaflow</h1>
            </div>
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex w-full items-center space-x-3 rounded-lg px-3 py-2.5 transition-colors ${
                        activeSection === item.id
                          ? "bg-[#128C7E] font-semibold text-white"
                          : "text-gray-300 hover:bg-[#128C7E] hover:text-white"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <button className="flex items-center space-x-3 rounded-lg px-3 py-2.5 text-gray-300 transition-colors hover:bg-[#128C7E] hover:text-white">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <h2 className="hidden text-xl font-semibold text-foreground md:block">
              Selamat Datang, Admin! 👋
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cari ID Panen atau Petani..."
                  className="w-64 rounded-full bg-muted pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-[#2E7D32] flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="text-sm font-semibold">Admin Kasa</p>
                  <p className="text-xs text-muted-foreground">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeSection === "dashboard" && <DashboardContent ekosistemData={ekosistemData} profitData={profitData} />}
          {activeSection === "laporan" && <LaporanContent volumeData={volumeData} wilayahData={wilayahData} />}
          {activeSection === "petani" && <PetaniContent />}
          {activeSection === "pengaturan" && <PengaturanContent />}
        </div>
      </div>
    </div>
  );
}

function DashboardContent({ ekosistemData, profitData }: any) {
  return (
    <>
      {/* Global Filter */}
      <Card className="mb-6">
        <CardContent className="flex flex-wrap items-center gap-4 p-4">
          <h3 className="mr-4 text-base font-semibold">Filter Global:</h3>
          <Select defaultValue="bulanan">
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bulanan">Bulanan</SelectItem>
              <SelectItem value="mingguan">Mingguan</SelectItem>
              <SelectItem value="kuartal">Kuartal</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="semua">
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semua">Semua Wilayah</SelectItem>
              <SelectItem value="pati">Pati</SelectItem>
              <SelectItem value="blora">Blora</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#2E7D32] hover:bg-[#1B4332]">
            <Filter className="mr-1 h-4 w-4" /> Filter
          </Button>
        </CardContent>
      </Card>

      {/* Top Summary */}
      <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-[#2E7D32] transition-transform hover:-translate-y-1">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <h3 className="text-sm font-semibold uppercase text-muted-foreground">Pengajuan Panen Aktif</h3>
              <p className="mt-1 text-3xl font-bold">48</p>
            </div>
            <div className="rounded-full bg-[#AAFDD2] p-3">
              <ClipboardList className="h-7 w-7 text-[#2E7D32]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-[#FBBF24] transition-transform hover:-translate-y-1">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <h3 className="text-sm font-semibold uppercase text-muted-foreground">Tervalidasi Lapangan</h3>
              <p className="mt-1 text-3xl font-bold">41</p>
            </div>
            <div className="rounded-full bg-yellow-100 p-3">
              <CheckCircle className="h-7 w-7 text-[#FBBF24]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-[#075E54] transition-transform hover:-translate-y-1">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <h3 className="text-sm font-semibold uppercase text-muted-foreground">Truk Dikirim</h3>
              <p className="mt-1 text-3xl font-bold">27</p>
            </div>
            <div className="rounded-full bg-gray-200 p-3">
              <Truck className="h-7 w-7 text-[#075E54]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-green-600 transition-transform hover:-translate-y-1">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <h3 className="text-sm font-semibold uppercase text-muted-foreground">Timbang Selesai</h3>
              <p className="mt-1 text-3xl font-bold">25</p>
            </div>
            <div className="rounded-full bg-green-100 p-3">
              <Scale className="h-7 w-7 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-blue-500 transition-transform hover:-translate-y-1">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <h3 className="text-sm font-semibold uppercase text-muted-foreground">Total Volume Panen</h3>
              <p className="mt-1 text-3xl font-bold">152.8 <span className="text-lg font-normal text-muted-foreground">ton</span></p>
            </div>
            <div className="rounded-full bg-blue-100 p-3">
              <BarChart3 className="h-7 w-7 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-purple-500 transition-transform hover:-translate-y-1">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <h3 className="text-sm font-semibold uppercase text-muted-foreground">Pembayaran Diproses</h3>
              <p className="mt-2 text-2xl font-bold">Rp 2,85 M</p>
            </div>
            <div className="rounded-full bg-purple-100 p-3">
              <CreditCard className="h-7 w-7 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-indigo-500 transition-transform hover:-translate-y-1">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <h3 className="text-sm font-semibold uppercase text-muted-foreground">Sinkronisasi ke ERP</h3>
              <p className="mt-1 text-3xl font-bold">98.7%</p>
            </div>
            <div className="rounded-full bg-indigo-100 p-3">
              <Server className="h-7 w-7 text-indigo-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ringkasan Ekosistem */}
      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Ringkasan Ekosistem</h2>

        {/* PoKu Section */}
        <h3 className="mb-4 mt-6 flex items-center text-lg font-bold text-[#4CAF50]">
          <Star className="mr-2 h-5 w-5" /> PoKu - Loyalitas Petani
        </h3>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-l-4 border-[#4CAF50]">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Anggota Aktif</h3>
                <p className="mt-1 text-3xl font-bold">6,240</p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <Users className="h-7 w-7 text-[#4CAF50]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-[#81C784]">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Rata-rata Poin / Petani</h3>
                <p className="mt-1 text-3xl font-bold">742</p>
              </div>
              <div className="rounded-full bg-green-50 p-3">
                <Award className="h-7 w-7 text-[#81C784]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-[#2E7D32]">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Retensi Bulanan</h3>
                <p className="mt-1 text-3xl font-bold">89%</p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <Activity className="h-7 w-7 text-[#2E7D32]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Traki Section */}
        <h3 className="mb-4 mt-10 flex items-center text-lg font-bold text-[#81C784]">
          <Tractor className="mr-2 h-5 w-5" /> Traki - Logistik & Sparepart
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-[#81C784]">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Unit Traktor Aktif</h3>
                <p className="mt-1 text-3xl font-bold">45</p>
              </div>
              <div className="rounded-full bg-green-50 p-3">
                <Truck className="h-7 w-7 text-[#81C784]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-[#66BB6A]">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Durasi Sewa Rata-rata</h3>
                <p className="mt-1 text-3xl font-bold">4.5 <span className="text-lg font-normal">jam</span></p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <Clock className="h-7 w-7 text-[#66BB6A]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-[#43A047]">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Nilai Penjualan Sparepart</h3>
                <p className="mt-1 text-2xl font-bold">Rp 124 Juta</p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <ShoppingBag className="h-7 w-7 text-[#43A047]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-[#2E7D32]">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Efisiensi Penggunaan</h3>
                <p className="mt-1 text-3xl font-bold">86%</p>
              </div>
              <div className="rounded-full bg-green-50 p-3">
                <Gauge className="h-7 w-7 text-[#2E7D32]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Charts */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Performa Ekosistem</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={ekosistemData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                  {ekosistemData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg">Profitabilitas vs Efisiensi Biaya</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="margin" stroke="#2E7D32" name="Margin Bersih (%)" />
                <Line yAxisId="right" type="monotone" dataKey="biaya" stroke="#FBBF24" name="Biaya Logistik (Rp Ribu/ton)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Operational Table */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clipboard className="h-5 w-5 text-[#2E7D32]" />
            <span>Daftar Operasional Terkini</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">Berikut adalah daftar pengajuan panen yang sedang berjalan.</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold uppercase tracking-wider">ID Panen</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase tracking-wider">Nama Petani</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase tracking-wider">Wilayah</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase tracking-wider">Volume (kg)</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-4 font-semibold">PN-1021</td>
                  <td className="px-5 py-4">Budi Santoso</td>
                  <td className="px-5 py-4">Pati</td>
                  <td className="px-5 py-4">6,200</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Timbang Selesai
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-4 font-semibold">PN-1024</td>
                  <td className="px-5 py-4">Joko Widodo</td>
                  <td className="px-5 py-4">Grobogan</td>
                  <td className="px-5 py-4">8,100</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                      Validasi Ditolak
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Insight */}
      <Card className="mt-10 border-l-4 border-green-600">
        <CardContent className="p-5">
          <h4 className="mb-2 flex items-center font-semibold">
            <TrendingUp className="mr-2 h-5 w-5 text-green-600" /> Insight Mingguan
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Volume panen naik <b>+12%</b> dibanding minggu lalu. Retensi petani aktif stabil di <b>89%</b>, sementara efisiensi penggunaan traktor meningkat <b>+6%</b> setelah penerapan jadwal otomatis.
          </p>
        </CardContent>
      </Card>
    </>
  );
}

function LaporanContent({ volumeData, wilayahData }: any) {
  return (
    <>
      <h2 className="mb-6 flex items-center space-x-2 text-2xl font-bold">
        <FileBarChart2 className="h-6 w-6 text-[#2E7D32]" />
        <span>Laporan Panen Singkong</span>
      </h2>

      {/* Key Metrics */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center space-x-4 p-5">
            <div className="rounded-full bg-blue-100 p-3">
              <Archive className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Volume</p>
              <p className="text-xl font-bold">103.2 ton</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center space-x-4 p-5">
            <div className="rounded-full bg-green-100 p-3">
              <Percent className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Rata-rata Kadar Aci</p>
              <p className="text-xl font-bold">23.5%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center space-x-4 p-5">
            <div className="rounded-full bg-purple-100 p-3">
              <Wallet className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Nilai Transaksi</p>
              <p className="text-xl font-bold">Rp 2.14 M</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Tren Volume Panen (ton)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="volume" fill="#128C7E" radius={[5, 5, 0, 0]} name="Volume Panen (ton)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Proporsi per Wilayah</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={wilayahData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {wilayahData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function PetaniContent() {
  return (
    <>
      <h2 className="mb-6 flex items-center space-x-2 text-2xl font-bold">
        <Users className="h-6 w-6 text-[#2E7D32]" />
        <span>Manajemen Petani</span>
      </h2>

      <Card className="mb-6">
        <CardContent className="flex flex-wrap items-center justify-between gap-4 p-5">
          <div className="relative flex items-center space-x-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input type="text" placeholder="Cari nama atau ID petani..." className="w-64" />
          </div>
          <Button className="bg-[#2E7D32] hover:bg-[#1B4332]">
            <Plus className="mr-1 h-4 w-4" /> Tambah Petani
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold uppercase">ID Petani</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase">Nama</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase">Wilayah</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase">Total Panen (kg)</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase">Status</th>
                  <th className="px-5 py-3 text-left font-semibold uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted/50 transition">
                  <td className="px-5 py-3 font-semibold">PTN-001</td>
                  <td className="px-5 py-3">Budi Santoso</td>
                  <td className="px-5 py-3">Pati</td>
                  <td className="px-5 py-3">24,500</td>
                  <td className="px-5 py-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">Aktif</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Edit3 className="h-4 w-4 text-yellow-500" /></Button>
                      <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4 text-red-500" /></Button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition">
                  <td className="px-5 py-3 font-semibold">PTN-003</td>
                  <td className="px-5 py-3">Paijo</td>
                  <td className="px-5 py-3">Rembang</td>
                  <td className="px-5 py-3">19,700</td>
                  <td className="px-5 py-3">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Perlu Verifikasi</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Edit3 className="h-4 w-4 text-yellow-500" /></Button>
                      <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4 text-red-500" /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function PengaturanContent() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Pengaturan Akun</h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profil Admin</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-[#2E7D32] flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
              <Button variant="secondary" size="sm">Ubah Foto</Button>
            </div>
            <div>
              <label className="block text-sm font-medium">Nama Lengkap</label>
              <Input type="text" defaultValue="Admin Kasa" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input type="email" defaultValue="admin@kasaflow.com" className="mt-1 bg-muted" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium">Ubah Password</label>
              <Input type="password" placeholder="Password baru" className="mt-1" />
            </div>
            <div className="text-right">
              <Button className="bg-[#2E7D32] hover:bg-[#1B4332]">Simpan Perubahan</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notifikasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <label className="flex items-center justify-between">
                <span>Email Notifikasi</span>
                <input type="checkbox" className="h-4 w-4 rounded text-[#2E7D32]" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span>Notifikasi Desktop</span>
                <input type="checkbox" className="h-4 w-4 rounded text-[#2E7D32]" />
              </label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ekspor Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">Unduh data laporan dalam format CSV atau Excel.</p>
              <Button className="w-full bg-[#128C7E] hover:bg-[#075E54]">
                <Download className="mr-2 h-4 w-4" /> Ekspor Laporan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
