import { redirect } from "next/navigation"
import { requireAuth } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Trophy, Target, Clock, Activity, Award, Users, TrendingUp } from "lucide-react"
import { AthleteHeader } from "@/components/athlete-header"

export default async function AthleteDashboard() {
  const { user, error } = await requireAuth(["atleta"])

  if (error || !user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <AthleteHeader user={user} />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Hola, {user.tipo_de_user}</h1>
          <p className="text-muted-foreground">
            Bienvenido a tu panel de atleta - Sigue tu progreso y mantente al día con tus entrenamientos
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Entrenamientos</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximos Eventos</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Logros</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Total obtenidos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Horas Entrenadas</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48h</div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress and Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Progreso Mensual</CardTitle>
              <CardDescription>Tu rendimiento en los objetivos del mes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Entrenamientos</span>
                  <span className="text-sm text-muted-foreground">24/30</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Horas de Entrenamiento</span>
                  <span className="text-sm text-muted-foreground">48/60h</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Objetivos Completados</span>
                  <span className="text-sm text-muted-foreground">7/10</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Próximos Entrenamientos</CardTitle>
              <CardDescription>Tu horario de esta semana</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Entrenamiento de Fuerza</p>
                  <p className="text-xs text-muted-foreground">Hoy - 18:00 - 19:30</p>
                </div>
                <Badge>Hoy</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Entrenamiento Grupal</p>
                  <p className="text-xs text-muted-foreground">Mañana - 16:00 - 17:00</p>
                </div>
                <Badge variant="outline">Mañana</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Técnica Específica</p>
                  <p className="text-xs text-muted-foreground">Viernes - 17:00 - 18:00</p>
                </div>
                <Badge variant="outline">Viernes</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements and Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Logros Recientes</CardTitle>
              <CardDescription>Tus últimos reconocimientos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Mejor Tiempo Personal</p>
                  <p className="text-xs text-muted-foreground">100m libres - 58.32s</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Nuevo</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Torneo Regional</p>
                  <p className="text-xs text-muted-foreground">2do lugar - Natación</p>
                </div>
                <Badge variant="outline">Hace 1 semana</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Racha de Entrenamientos</p>
                  <p className="text-xs text-muted-foreground">15 días consecutivos</p>
                </div>
                <Badge variant="outline">Activo</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rendimiento</CardTitle>
              <CardDescription>Estadísticas de tu progreso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.5</div>
                <p className="text-sm text-muted-foreground">Puntuación promedio del entrenador</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <p className="text-xs text-muted-foreground">Asistencia</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Mejoras este mes</p>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                Ver Estadísticas Detalladas
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>Gestiona tu actividad deportiva</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col gap-2">
                <Calendar className="h-6 w-6" />
                Ver Calendario
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
                <Activity className="h-6 w-6" />
                Registrar Entrenamiento
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
                <Trophy className="h-6 w-6" />
                Mis Competencias
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
                <Target className="h-6 w-6" />
                Objetivos
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
