import {
  Settings, Share2, Mail, Globe, Calendar, Heart,
  Users, LayoutGrid, ImageIcon, FileText, Bookmark,
  Github, Twitter, Instagram
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle"

export default function ProfilePage() {
  return (
    // Заменили bg-neutral-50 на bg-background
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <main className="container mx-auto py-10 px-4 grow max-w-4xl">

        {/* 1. Шапка профиля */}
        <Card className="mb-6 border-border bg-card shadow-sm">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-border">
                <AvatarImage src="https://github.com" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">Иван Иванов</h1>
                    <p className="text-muted-foreground font-medium">Senior Frontend Developer</p>
                    <p className="text-sm text-muted-foreground/60">@ivan_dev_2026</p>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <Button variant="default" size="sm">Редактировать профиль</Button>
                    <Button variant="outline" size="icon"><Share2 className="h-4 w-4" /></Button>
                    <ModeToggle />
                    <Button variant="outline" size="icon"><Settings className="h-4 w-4" /></Button>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Увлеченный разработчик интерфейсов. Люблю чистый код, системный дизайн и кофе.
                  Экспериментирую с анимациями и производительностью в вебе.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Блок статистики */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Публикации", value: "154", icon: <LayoutGrid className="w-4 h-4 text-blue-400" /> },
            { label: "Подписчики", value: "8.2k", icon: <Users className="w-4 h-4 text-green-400" /> },
            { label: "Подписки", value: "320", icon: <Users className="w-4 h-4 text-purple-400" /> },
            { label: "Лайки", value: "42k", icon: <Heart className="w-4 h-4 text-red-400" /> },
          ].map((item, idx) => (
            <Card key={idx} className="border-border bg-card">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <div className="mb-1">{item.icon}</div>
                <div className="text-lg font-bold">{item.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3. Секция «О себе» */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2 border-border bg-card">
            <CardHeader><CardTitle className="text-lg">Биография</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">
                Начал свой путь в IT с фриланса, сейчас руковожу командой разработки.
                Верю, что детали создают продукт. Активно контрибьючу в Open Source.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Node.js"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal bg-secondary text-secondary-foreground">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader><CardTitle className="text-lg">Контакты</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" /> ivan@example.com
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" /> ivandev.ru
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground/50">
                <Calendar className="w-4 h-4" /> С нами с 2022
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4. Навигация (Табы) */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full md:w-auto grid grid-cols-4 bg-muted p-1">
            <TabsTrigger value="all" className="text-xs">Все посты</TabsTrigger>
            <TabsTrigger value="media" className="text-xs">Медиа</TabsTrigger>
            <TabsTrigger value="docs" className="text-xs">Документы</TabsTrigger>
            <TabsTrigger value="fav" className="text-xs">Избранное</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-muted rounded-md animate-pulse" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* 5. Подвал */}
      <footer className="bg-card border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <div className="flex items-center gap-2 font-semibold">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-[10px]">P</div>
              <span>© 2026 Название.</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
              <a href="#" className="hover:text-foreground transition-colors">Блог</a>
              <a href="#" className="hover:text-foreground transition-colors">Вакансии</a>
            </div>

            <div className="flex gap-4 text-muted-foreground/60">
              <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-foreground transition-colors">Условия</a>
            </div>

            <div className="flex gap-4">
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
