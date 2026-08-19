'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { RendimientoItem } from '@/lib/mockData';

export default function Charts({ data }: { data: RendimientoItem[] }) {
  const barOption = {
    color: ['#7A1C28', '#C5A059', '#6B5E51'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    legend: {
      data: ['Aprobados', 'Desaprobados', 'Retirados'],
      bottom: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '12%',
      top: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: data.map((d) => d.escuela),
      axisLabel: { interval: 0, rotate: 20, fontSize: 11 },
    },
    yAxis: {
      type: 'value',
      name: 'Estudiantes',
    },
    series: [
      {
        name: 'Aprobados',
        type: 'bar',
        barWidth: '22%',
        data: data.map((d) => d.aprobados),
      },
      {
        name: 'Desaprobados',
        type: 'bar',
        barWidth: '22%',
        data: data.map((d) => d.desaprobados),
      },
      {
        name: 'Retirados',
        type: 'bar',
        barWidth: '22%',
        data: data.map((d) => d.retirados),
      },
    ],
  };

  const pieOption = {
    color: ['#7A1C28', '#C5A059', '#3D5A80', '#9E2A38', '#E6CA85', '#293241'],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} estudiantes ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: { fontSize: 11 },
    },
    series: [
      {
        name: 'Distribución',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#FAF7F2',
          borderWidth: 2,
        },
        label: { show: false },
        data: data.map((d) => ({ value: d.aprobados + d.desaprobados, name: d.escuela })),
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-linea shadow-sm">
        <h3 className="text-base font-serif font-bold text-granate mb-3">
          Estadísticas de Aprobación y Retiro por Escuela
        </h3>
        <div className="h-[320px]">
          <ReactECharts option={barOption} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-linea shadow-sm">
        <h3 className="text-base font-serif font-bold text-granate mb-3">
          Participación por Programa
        </h3>
        <div className="h-[320px]">
          <ReactECharts option={pieOption} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
    </div>
  );
}