import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent:()=>
            import('./components/auth/auth.component').then(m=> m.AuthComponent)
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: 'home',
                loadComponent:()=>
                    import('./components/home/home.component').then(m=> m.HomeComponent)
            },
            {
                path: 'dashboard',
                loadComponent:()=>
                    import('./components/dashboard/dashboard.component').then(m=> m.DashboardComponent)
            },
            // Redirecionar a rota vazia do layout para home
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
];
