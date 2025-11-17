<template>
    <div class="dashboard-container">
        <div class="dashboard-main">
            <div class="summary-row">
                <div class="summary-card">
                    <div class="summary-title">Total classes</div>
                    <div class="summary-value">02/08</div>
                </div>
                <div class="summary-card">
                    <div class="summary-title">Total Students</div>
                    <div class="summary-value">02/08</div>
                </div>
                <div class="summary-card">
                    <div class="summary-title">Total Lessons</div>
                    <div class="summary-value">40/50</div>
                </div>
                <div class="summary-card">
                    <div class="summary-title">Total Hours</div>
                    <div class="summary-value">12/20</div>
                </div>
            </div>
            <div class="main-row">
                <div class="main-col">
                    <div class="card">
                        <div class="card-title">Students Performance</div>
                        <div class="card-content">
                            <div class="perf-row" v-for="i in 5" :key="i">
                                <img
                                    class="perf-avatar"
                                    :src="
                                        'https://randomuser.me/api/portraits/men/' +
                                        (30 + i) +
                                        '.jpg'
                                    "
                                />
                                <span class="perf-name">Oliver James</span>
                                <span class="perf-score">{{ 90 + i }}%</span>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-title">Teaching Lessons</div>
                        <div class="card-content">
                            <div class="lesson-row" v-for="i in 3" :key="i">
                                <div>
                                    <div class="lesson-time">Start from<br />Today, 10:30 AM</div>
                                </div>
                                <div>
                                    <div class="lesson-title">High fidelity wireframes</div>
                                    <div class="lesson-sub">2 Lesson &bull; 60 min</div>
                                </div>
                                <div>
                                    <div class="lesson-subject">Mathematics</div>
                                    <button class="lesson-btn">Reminder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-col">
                    <div class="card calendar-card">
                        <div class="card-title">May 2023</div>
                        <div class="calendar-grid">
                            <div
                                v-for="d in 31"
                                :key="d"
                                class="calendar-day"
                                :class="{ today: d === 14 }"
                            >
                                {{ d }}
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-title">Upcoming Events</div>
                        <div class="card-content">
                            <div class="event-row">
                                <div class="event-date">10 Jan</div>
                                <div>
                                    <div>Biology</div>
                                    <div>Chemistry</div>
                                    <div>Physics</div>
                                </div>
                                <div class="event-time">09:00 - 10:00 AM</div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-title">My Notes</div>
                        <div class="card-content">
                            <div class="note-row" v-for="i in 3" :key="i">
                                <span class="note-dot"></span>
                                <span>Prepare questions for final test</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({ name: 'HomeView' })
</script>

<style scoped>
.dashboard-container {
    min-height: 100vh;
    padding: 32px 0;
}
.dashboard-main {
    margin: 0 auto;
}
.summary-row {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
}
.summary-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(40, 40, 60, 0.08);
    flex: 1;
    padding: 24px 0 18px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.summary-title {
    font-size: 1rem;
    color: #888;
    margin-bottom: 8px;
}
.summary-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: #6366f1;
}
.main-row {
    display: flex;
    gap: 32px;
}
.main-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(40, 40, 60, 0.08);
    padding: 20px 18px;
}
.card-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 16px;
}
.card-content {
    font-size: 1rem;
    color: #222;
}
.perf-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
}
.perf-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
}
.perf-name {
    flex: 1;
    font-weight: 500;
}
.perf-score {
    font-weight: 700;
    color: #6366f1;
}
.lesson-row {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 14px;
}
.lesson-time {
    font-size: 0.95rem;
    color: #888;
}
.lesson-title {
    font-weight: 600;
}
.lesson-sub {
    font-size: 0.92rem;
    color: #888;
}
.lesson-subject {
    font-size: 0.98rem;
    color: #6366f1;
    font-weight: 600;
    margin-bottom: 6px;
}
.lesson-btn {
    background: #6366f1;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 4px 14px;
    font-size: 0.95rem;
    cursor: pointer;
}
.calendar-card {
    padding-bottom: 8px;
}
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-top: 8px;
}
.calendar-day {
    background: #f1f5f9;
    border-radius: 6px;
    text-align: center;
    padding: 6px 0;
    font-size: 0.95rem;
    color: #888;
}
.calendar-day.today {
    background: #6366f1;
    color: #fff;
    font-weight: 700;
}
.event-row {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 10px;
}
.event-date {
    font-weight: 700;
    color: #6366f1;
    min-width: 60px;
}
.event-time {
    font-size: 0.95rem;
    color: #888;
}
.note-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
}
.note-dot {
    width: 8px;
    height: 8px;
    background: #6366f1;
    border-radius: 50%;
    display: inline-block;
}
@media (max-width: 900px) {
    .dashboard-main {
        max-width: 100vw;
        padding: 0 8px;
    }
    .main-row {
        flex-direction: column;
        gap: 18px;
    }
}
</style>
