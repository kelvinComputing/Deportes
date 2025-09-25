import { redirect } from "next/navigation"
import { requireAuth } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Trophy, Settings, BarChart3, UserPlus } from "lucide-react"
import { AdminHeader } from "@/components/admin-header"

export default async function AdminDashboard() {
  const { user, error } = await requireAuth(["ADMINISTRADOR"])

  if (error || !user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={user} />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Bienvenido, {user.tipo_de_user}</h1>
          <p className="text-muted-foreground">
            Panel de administración de SportClub - Gestiona tu club deportivo de manera eficiente
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Atletas</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Eventos Activos</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">8 esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Competencias</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">3 próximas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos Mensuales</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">+8% desde el mes pasado</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
              <CardDescription>Gestiona las tareas más comunes del club</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button className="h-20 flex flex-col gap-2">
                <UserPlus className="h-6 w-6" />
                Nuevo Atleta
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
                <Calendar className="h-6 w-6" />
                Crear Evento
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
                <Trophy className="h-6 w-6" />
                Nueva Competencia
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
                <Settings className="h-6 w-6" />
                Configuración
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notificaciones Recientes</CardTitle>
              <CardDescription>Mantente al día con las últimas actividades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Nuevo atleta registrado</p>
                  <p className="text-xs text-muted-foreground">María González se unió al equipo de natación</p>
                  <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Evento próximo</p>
                  <p className="text-xs text-muted-foreground">Torneo de fútbol este sábado</p>
                  <p className="text-xs text-muted-foreground">Hace 4 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Pago recibido</p>
                  <p className="text-xs text-muted-foreground">Cuota mensual de Carlos Ruiz</p>
                  <p className="text-xs text-muted-foreground">Hace 1 día</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>Últimas acciones realizadas en el sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ana Martínez</p>
                    <p className="text-xs text-muted-foreground">Se registró en el equipo de voleibol</p>
                  </div>
                </div>
                <Badge variant="secondary">Nuevo</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Entrenamiento de Básquet</p>
                    <p className="text-xs text-muted-foreground">Programado para mañana 18:00</p>
                  </div>
                </div>
                <Badge variant="outline">Programado</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Torneo Regional</p>
                    <p className="text-xs text-muted-foreground">Resultados actualizados</p>
                  </div>
                </div>
                <Badge variant="outline">Completado</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
