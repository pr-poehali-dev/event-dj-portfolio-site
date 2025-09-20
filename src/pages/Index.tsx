import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from '@/components/ui/icon'

const DJPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home')

  const events = [
    {
      title: "Ночной клуб NEON",
      date: "15 сентября 2024",
      type: "Корпоратив",
      image: "/img/3e1474c5-7ac4-419b-b03e-29f33f49485a.jpg"
    },
    {
      title: "Свадьба в отеле Radisson",
      date: "8 сентября 2024", 
      type: "Свадьба",
      image: "/img/8c22ceaa-3a66-439b-b6c9-cfebc99c2950.jpg"
    },
    {
      title: "День рождения VIP",
      date: "1 сентября 2024",
      type: "Частное мероприятие",
      image: "/img/9ce5a793-13ca-4674-9259-6a5e82b4e0cc.jpg"
    }
  ]

  const services = [
    {
      title: "DJ на корпоратив",
      description: "Профессиональное музыкальное сопровождение корпоративных мероприятий",
      price: "от 25 000 ₽"
    },
    {
      title: "Свадебный DJ",
      description: "Создание идеальной атмосферы для самого важного дня",
      price: "от 35 000 ₽"
    },
    {
      title: "Частные вечеринки",
      description: "Эксклюзивные миксы для закрытых мероприятий",
      price: "от 20 000 ₽"
    },
    {
      title: "Клубные сеты",
      description: "Выступления в ночных клубах и барах",
      price: "от 15 000 ₽"
    }
  ]

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Потрясающий DJ! Наша свадьба прошла на высшем уровне, все гости танцевали до утра!",
      rating: 5,
      event: "Свадьба"
    },
    {
      name: "Игорь Сидоров", 
      text: "Профессиональный подход и отличное чувство публики. Рекомендую всем!",
      rating: 5,
      event: "Корпоратив"
    },
    {
      name: "Мария Иванова",
      text: "Лучший DJ в городе! Умеет читать настроение зала и подбирать идеальную музыку.",
      rating: 5,
      event: "День рождения"
    }
  ]

  const equipment = [
    "Pioneer CDJ-3000 (2 шт.)",
    "Pioneer DJM-V10 микшер",
    "Sennheiser HD 25 наушники",
    "JBL EON715 колонки (пара)",
    "Shure SM58 микрофоны",
    "American DJ освещение"
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-club-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-club-darker/90 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold text-gold">
              DJ МАСТЕР
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'events', label: 'Мероприятия' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'services', label: 'Услуги' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'equipment', label: 'Оборудование' },
                { id: 'contact', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-gold ${
                    activeSection === item.id ? 'text-gold' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gold text-club-dark hover:bg-gold-light font-semibold animate-pulse-gold"
            >
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/3e1474c5-7ac4-419b-b03e-29f33f49485a.jpg" 
            alt="DJ Setup"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-club-darker/50 via-club-dark/70 to-club-dark"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-montserrat font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
            DJ МАСТЕР
          </h1>
          <p className="text-xl md:text-2xl font-open-sans mb-8 text-white/90 max-w-2xl mx-auto">
            Профессиональное музыкальное сопровождение ваших мероприятий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-gold text-club-dark hover:bg-gold-light font-semibold text-lg px-8 py-3 animate-glow"
            >
              <Icon name="Music" className="mr-2" size={20} />
              Услуги
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-gold text-gold hover:bg-gold hover:text-club-dark font-semibold text-lg px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>

          {/* Demo Track Player */}
          <div className="mt-12 max-w-md mx-auto">
            <Card className="bg-club-light/50 border-gold/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gold text-center font-montserrat">Демо-треки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-club-darker/50 rounded-lg">
                    <div>
                      <p className="font-medium">House Mix 2024</p>
                      <p className="text-sm text-white/60">3:45</p>
                    </div>
                    <Button size="sm" className="bg-gold text-club-dark hover:bg-gold-light">
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-club-darker/50 rounded-lg">
                    <div>
                      <p className="font-medium">Wedding Special</p>
                      <p className="text-sm text-white/60">4:20</p>
                    </div>
                    <Button size="sm" className="bg-gold text-club-dark hover:bg-gold-light">
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-gold">
            Последние мероприятия
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="bg-club-light/30 border-gold/20 hover:border-gold/50 transition-all group hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-gold text-club-dark">
                    {event.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-gold font-montserrat">{event.title}</CardTitle>
                  <CardDescription className="text-white/70">{event.date}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-club-darker/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-gold">
            Галерея
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <img src="/img/3e1474c5-7ac4-419b-b03e-29f33f49485a.jpg" alt="Gallery 1" className="w-full rounded-lg hover:scale-105 transition-transform duration-300" />
              <img src="/img/8c22ceaa-3a66-439b-b6c9-cfebc99c2950.jpg" alt="Gallery 2" className="w-full rounded-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-6">
              <img src="/img/9ce5a793-13ca-4674-9259-6a5e82b4e0cc.jpg" alt="Gallery 3" className="w-full rounded-lg hover:scale-105 transition-transform duration-300" />
              <img src="/img/3e1474c5-7ac4-419b-b03e-29f33f49485a.jpg" alt="Gallery 4" className="w-full rounded-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-6">
              <img src="/img/8c22ceaa-3a66-439b-b6c9-cfebc99c2950.jpg" alt="Gallery 5" className="w-full rounded-lg hover:scale-105 transition-transform duration-300" />
              <img src="/img/9ce5a793-13ca-4674-9259-6a5e82b4e0cc.jpg" alt="Gallery 6" className="w-full rounded-lg hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-gold">
            Услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-club-light/30 border-gold/20 hover:border-gold/50 transition-all hover:shadow-2xl hover:shadow-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold font-montserrat text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-white/70">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold">{service.price}</span>
                    <Button className="bg-gold text-club-dark hover:bg-gold-light">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-club-darker/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-gold">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-club-light/30 border-gold/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-gold font-montserrat text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-gold fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="border-gold text-gold w-fit">
                    {review.event}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-gold">
            Оборудование
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-club-light/30 border-gold/20">
              <CardHeader>
                <CardTitle className="text-gold font-montserrat text-2xl text-center">
                  Профессиональное оборудование
                </CardTitle>
                <CardDescription className="text-white/70 text-center">
                  Используем только качественную технику мировых брендов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {equipment.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-club-darker/50 rounded-lg">
                        <Icon name="CheckCircle" className="text-gold" size={20} />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {equipment.slice(3).map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-club-darker/50 rounded-lg">
                        <Icon name="CheckCircle" className="text-gold" size={20} />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <img 
                    src="/img/9ce5a793-13ca-4674-9259-6a5e82b4e0cc.jpg" 
                    alt="DJ Equipment"
                    className="w-full max-w-2xl mx-auto rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-club-darker/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-gold">
            Связаться со мной
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-montserrat font-semibold mb-6 text-gold">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" className="text-gold" size={24} />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" className="text-gold" size={24} />
                  <span className="text-lg">dj.master@email.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" className="text-gold" size={24} />
                  <span className="text-lg">Москва и область</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Instagram" className="text-gold" size={24} />
                  <span className="text-lg">@dj_master_moscow</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-montserrat font-semibold mb-4 text-gold">Интеграция с музыкальными платформами</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-club-light/20 rounded-lg">
                    <Icon name="Music" className="text-gold" size={20} />
                    <span>Spotify плейлисты</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-club-light/20 rounded-lg">
                    <Icon name="Radio" className="text-gold" size={20} />
                    <span>SoundCloud миксы</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-club-light/30 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold font-montserrat">Заказать выступление</CardTitle>
                  <CardDescription className="text-white/70">
                    Заполните форму, и я свяжусь с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-white/80 block mb-2">Имя</label>
                    <Input 
                      placeholder="Ваше имя"
                      className="bg-club-darker/50 border-gold/30 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/80 block mb-2">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67"
                      className="bg-club-darker/50 border-gold/30 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/80 block mb-2">Тип мероприятия</label>
                    <Input 
                      placeholder="Свадьба, корпоратив, день рождения..."
                      className="bg-club-darker/50 border-gold/30 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/80 block mb-2">Дата мероприятия</label>
                    <Input 
                      type="date"
                      className="bg-club-darker/50 border-gold/30 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/80 block mb-2">Дополнительная информация</label>
                    <Textarea 
                      placeholder="Расскажите о вашем мероприятии..."
                      className="bg-club-darker/50 border-gold/30 text-white placeholder:text-white/50"
                      rows={3}
                    />
                  </div>
                  <Button className="w-full bg-gold text-club-dark hover:bg-gold-light font-semibold text-lg py-3">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gold/20">
        <div className="container mx-auto text-center">
          <p className="text-white/60">
            © 2024 DJ МАСТЕР. Все права защищены.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Профессиональные DJ услуги в Москве и области
          </p>
        </div>
      </footer>
    </div>
  )
}

export default DJPortfolio