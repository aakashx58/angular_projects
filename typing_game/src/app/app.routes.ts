import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TypingTest } from './pages/typing-test/typing-test';
import { Leaderboard } from './services/leaderboard';
import { About } from './pages/about/about';
import { Themes } from './pages/themes/themes';

export const routes: Routes = [
    {path: '', redirectTo: '/typing_test', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'typing_test', component: TypingTest},
    {path: 'leaderboard', component: Leaderboard},
    {path: 'themes', component: Themes},
    {path: 'error', component: Error},
    {path: '**', component: Error},
];
