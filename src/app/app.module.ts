import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopNavComponent } from "./template/layout/top-nav/top-nav.component";
import { SideNavComponent } from "./template/layout/side-nav/side-nav.component";
import { FooterComponent } from "./template/layout/footer/footer.component";
import { SalesComponent } from "./template/dashboards/sales/sales.component";
import { ColorCustomizerComponent } from "./template/layout/color-customizer/color-customizer.component";
import { PreloaderComponent } from "./template/layout/preloader/preloader.component";
import { MonthlySalesStatisticsComponent } from "./template/charts/monthly-sales-statistics/monthly-sales-statistics.component";
import { SalesByCountriesComponent } from "./template/charts/sales-by-countries/sales-by-countries.component";
import { EcommerceComponent } from "./template/dashboards/ecommerce/ecommerce.component";
import { OrderSummaryComponent } from "./template/charts/order-summary/order-summary.component";
import { ApexAreaChartComponent } from "./template/charts/apex-area-chart/apex-area-chart.component";
import { AnalyticsComponent } from "./template/dashboards/analytics/analytics.component";
import { VisitorsOverviewComponent } from "./template/charts/visitors-overview/visitors-overview.component";
import { LeadsStatsComponent } from "./template/charts/leads-stats/leads-stats.component";
import { RevenueByCountriesComponent } from "./template/charts/revenue-by-countries/revenue-by-countries.component";
import { CrmComponent } from "./template/dashboards/crm/crm.component";
import { TotalSalesComponent } from "./template/charts/total-sales/total-sales.component";
import { WeeklyTargetComponent } from "./template/charts/weekly-target/weekly-target.component";
import { ProjectComponent } from "./template/dashboards/project/project.component";
import { MonthlyHoursComponent } from "./template/charts/monthly-hours/monthly-hours.component";
import { InboxComponent } from "./template/dashboards/pages/inbox/inbox.component";
import { ChatComponent } from "./template/dashboards/pages/chat/chat.component";
import { TodosComponent } from "./template/dashboards/pages/todos/todos.component";
import { NotesComponent } from "./template/dashboards/pages/notes/notes.component";
import { SearchComponent } from "./template/dashboards/pages/search/search.component";
import { UiComponentsComponent } from "./template/dashboards/ui-components/ui-components/ui-components.component";
import { UiAlertsComponent } from "./template/dashboards/ui-components/ui-alerts/ui-alerts.component";
import { BadgesComponent } from "./template/dashboards/ui-components/badges/badges.component";
import { ButtonsComponent } from "./template/dashboards/ui-components/buttons/buttons.component";
import { CardsComponent } from "./template/dashboards/ui-components/cards/cards.component";
import { DropdownsComponent } from "./template/dashboards/ui-components/dropdowns/dropdowns.component";
import { FormsComponent } from "./template/dashboards/ui-components/forms/forms.component";
import { ListGroupsComponent } from "./template/dashboards/ui-components/list-groups/list-groups.component";
import { ModalsComponent } from "./template/dashboards/ui-components/modals/modals.component";
import { ProgressBarsComponent } from "./template/dashboards/ui-components/progress-bars/progress-bars.component";
import { TablesComponent } from "./template/dashboards/ui-components/tables/tables.component";
import { TabsComponent } from "./template/dashboards/ui-components/tabs/tabs.component";
import { SignupComponent } from "./template/dashboards/auth/signup/signup.component";
import { AuthComponent } from "./template/dashboards/auth/auth/auth.component";
import { SigninComponent } from "./template/dashboards/auth/signin/signin.component";
import { ForgotPasswordComponent } from "./template/dashboards/auth/forgot-password/forgot-password.component";
import { LineChartsComponent } from "./template/dashboards/charts/line-charts/line-charts.component";
import { ChartsComponent } from "./template/dashboards/charts/charts/charts.component";
import { AreaChartsComponent } from "./template/dashboards/charts/area-charts/area-charts.component";
import { ColumnChartsComponent } from "./template/dashboards/charts/column-charts/column-charts.component";
import { BarChartsComponent } from "./template/dashboards/charts/bar-charts/bar-charts.component";
import { MixedChartsComponent } from "./template/dashboards/charts/mixed-charts/mixed-charts.component";
import { PieDonutsChartsComponent } from "./template/dashboards/charts/pie-donuts-charts/pie-donuts-charts.component";
import { LineChartComponent } from "./template/charts/line-chart/line-chart.component";
import { LineWithDataLabelsComponent } from "./template/charts/line-with-data-labels/line-with-data-labels.component";
import { AnnotationsChartComponent } from "./template/charts/annotations-chart/annotations-chart.component";
import { GradientChartComponent } from "./template/charts/gradient-chart/gradient-chart.component";
import { DashedChartComponent } from "./template/charts/dashed-chart/dashed-chart.component";
import { SplineAreaChartComponent } from "./template/charts/spline-area-chart/spline-area-chart.component";
import { NegativeAreaChartComponent } from "./template/charts/negative-area-chart/negative-area-chart.component";
import { StackedAreaChartComponent } from "./template/charts/stacked-area-chart/stacked-area-chart.component";
import { ColumnChartComponent } from "./template/charts/column-chart/column-chart.component";
import { ColumnWithDataLabelsComponent } from "./template/charts/column-with-data-labels/column-with-data-labels.component";
import { StackedColumnsComponent } from "./template/charts/stacked-columns/stacked-columns.component";
import { StackedColumnsHundredComponent } from "./template/charts/stacked-columns-hundred/stacked-columns-hundred.component";
import { ColumnWithNegativeValuesComponent } from "./template/charts/column-with-negative-values/column-with-negative-values.component";
import { BarChartComponent } from "./template/charts/bar-chart/bar-chart.component";
import { GroupedChartComponent } from "./template/charts/grouped-chart/grouped-chart.component";
import { StackedBarChartComponent } from "./template/charts/stacked-bar-chart/stacked-bar-chart.component";
import { StackedBarHundredComponent } from "./template/charts/stacked-bar-hundred/stacked-bar-hundred.component";
import { DatalabelsBarComponent } from "./template/charts/datalabels-bar/datalabels-bar.component";
import { MixedChartsLineColumnComponent } from "./template/charts/mixed-charts-line-column/mixed-charts-line-column.component";
import { MixedMultipleYAxisComponent } from "./template/charts/mixed-multiple-y-axis/mixed-multiple-y-axis.component";
import { MixedLineAreaChartsComponent } from "./template/charts/mixed-line-area-charts/mixed-line-area-charts.component";
import { MixedLineColumnAreaChartComponent } from "./template/charts/mixed-line-column-area-chart/mixed-line-column-area-chart.component";
import { SimplePieChartComponent } from "./template/charts/simple-pie-chart/simple-pie-chart.component";
import { SimpleDonutChartComponent } from "./template/charts/simple-donut-chart/simple-donut-chart.component";
import { MonochromePieChartComponent } from "./template/charts/monochrome-pie-chart/monochrome-pie-chart.component";
import { GradientDonutChartComponent } from "./template/charts/gradient-donut-chart/gradient-donut-chart.component";
import { IconsComponent } from "./template/dashboards/icons/icons/icons.component";
import { FeatherIconsComponent } from "./template/dashboards/icons/feather-icons/feather-icons.component";
import { LineIconsComponent } from "./template/dashboards/icons/line-icons/line-icons.component";
import { IcofontIconsComponent } from "./template/dashboards/icons/icofont-icons/icofont-icons.component";
import { OthersComponent } from "./template/dashboards/others/others/others.component";
import { UsersCardComponent } from "./template/dashboards/others/users-card/users-card.component";
import { NotificationsComponent } from "./template/dashboards/others/notifications/notifications.component";
import { TimelineComponent } from "./template/dashboards/others/timeline/timeline.component";
import { InvoiceTemplateComponent } from "./template/dashboards/others/invoice-template/invoice-template.component";
import { GalleryComponent } from "./template/dashboards/others/gallery/gallery.component";
import { FaqComponent } from "./template/dashboards/others/faq/faq.component";
import { PricingComponent } from "./template/dashboards/others/pricing/pricing.component";
import { ProfileComponent } from "./template/dashboards/others/profile/profile.component";
import { ProfileSettingsComponent } from "./template/dashboards/others/profile-settings/profile-settings.component";
import { ErrorComponent } from "./template/dashboards/others/error/error.component";
import { HeaderComponent } from "./template/header/header.component";
import { CreationComponent } from "./template/creation/creation.component";
import { LoginComponent } from "./components/login/login.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { CreateInterventionComponent } from "./components/create-intervention/create-intervention.component";
import { ListingInterventionsComponent } from "./components/listing-interventions/listing-interventions.component";
import { ListingUsersComponent } from "./components/listing-users/listing-users.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/layout/navbar/navbar.component";
import { SidebarComponent } from "./components/layout/sidebar/sidebar.component";
import { InterventionDetailsComponent } from "./components/intervention-details/intervention-details.component";
import { ListingServicesComponent } from "./components/listing-services/listing-services.component";
import { CreateServiceComponent } from "./components/create-service/create-service.component";
import { InterventionPipe } from "./pipes/intervention.pipe";
import { UserPipe } from "./pipes/user.pipe";
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { AppTotalClientComponent } from './components/app-total-client/app-total-client.component';
import { MesInterventionsComponent } from './components/mes-interventions/mes-interventions.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TopNavComponent,
        CreationComponent,
        SideNavComponent,
        FooterComponent,
        SalesComponent,
        ColorCustomizerComponent,
        PreloaderComponent,
        MonthlySalesStatisticsComponent,
        SalesByCountriesComponent,
        EcommerceComponent,
        OrderSummaryComponent,
        ApexAreaChartComponent,
        AnalyticsComponent,
        VisitorsOverviewComponent,
        LeadsStatsComponent,
        RevenueByCountriesComponent,
        CrmComponent,
        TotalSalesComponent,
        WeeklyTargetComponent,
        ProjectComponent,
        MonthlyHoursComponent,
        InboxComponent,
        ChatComponent,
        TodosComponent,
        NotesComponent,
        SearchComponent,
        UiComponentsComponent,
        UiAlertsComponent,
        BadgesComponent,
        ButtonsComponent,
        CardsComponent,
        DropdownsComponent,
        FormsComponent,
        ListGroupsComponent,
        ModalsComponent,
        ProgressBarsComponent,
        TablesComponent,
        TabsComponent,
        SignupComponent,
        AuthComponent,
        SigninComponent,
        ForgotPasswordComponent,
        LineChartsComponent,
        ChartsComponent,
        AreaChartsComponent,
        ColumnChartsComponent,
        BarChartsComponent,
        MixedChartsComponent,
        PieDonutsChartsComponent,
        LineChartComponent,
        LineWithDataLabelsComponent,
        AnnotationsChartComponent,
        GradientChartComponent,
        DashedChartComponent,
        SplineAreaChartComponent,
        NegativeAreaChartComponent,
        StackedAreaChartComponent,
        ColumnChartComponent,
        ColumnWithDataLabelsComponent,
        StackedColumnsComponent,
        StackedColumnsHundredComponent,
        ColumnWithNegativeValuesComponent,
        BarChartComponent,
        GroupedChartComponent,
        StackedBarChartComponent,
        StackedBarHundredComponent,
        DatalabelsBarComponent,
        MixedChartsLineColumnComponent,
        MixedMultipleYAxisComponent,
        MixedLineAreaChartsComponent,
        MixedLineColumnAreaChartComponent,
        SimplePieChartComponent,
        SimpleDonutChartComponent,
        MonochromePieChartComponent,
        GradientDonutChartComponent,
        IconsComponent,
        FeatherIconsComponent,
        LineIconsComponent,
        IcofontIconsComponent,
        OthersComponent,
        UsersCardComponent,
        NotificationsComponent,
        TimelineComponent,
        InvoiceTemplateComponent,
        GalleryComponent,
        FaqComponent,
        PricingComponent,
        ProfileComponent,
        ProfileSettingsComponent,
        ErrorComponent,
        LoginComponent,
        CreateUserComponent,
        CreateInterventionComponent,
        ListingInterventionsComponent,
        ListingUsersComponent,
        DashboardComponent,
        SettingsComponent,
        OrdersComponent,
        NavbarComponent,
        SidebarComponent,
        InterventionDetailsComponent,
        ListingServicesComponent,
        CreateServiceComponent,
        InterventionPipe,
        UserPipe,
        DashboardClientComponent,
        AppTotalClientComponent,
        MesInterventionsComponent,
        UserProfileComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [InterventionPipe, UserPipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
